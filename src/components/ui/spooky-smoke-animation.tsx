/**
 * spooky-smoke-animation.tsx
 * WebGL2 fragment-shader smoke rendered onto a <canvas>.
 * Supports mouse-repulsion: smoke is blown away from the cursor.
 *
 * Props
 *   smokeColor  – hex string, e.g. "#8A2BE2". Defaults to "#808080" (neutral grey).
 *   className   – extra Tailwind classes forwarded to the <canvas> element.
 */

import React, { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Fragment shader — includes u_mouse uniform for smoke distortion
// ---------------------------------------------------------------------------
const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2  resolution;
uniform vec3  u_color;
uniform vec2  u_mouse;   // CSS pixel coords (origin top-left), or vec2(-1) when off-screen

#define FC gl_FragCoord.xy
#define R  resolution
#define T  (time + 660.)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3. - 2. * f);
  return mix(
    mix(rnd(i),             rnd(i + vec2(1, 0)), u.x),
    mix(rnd(i + vec2(0,1)), rnd(i + 1.),         u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float t = 0., a = 1.;
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= mat2(1, -1.2, .2, 1.2) * 2.;
    a *= .5;
  }
  return t;
}

void main() {
  vec2 uv = (FC - .5 * R) / R.y;

  // ── Mouse repulsion ──────────────────────────────────────────────────────
  // Convert mouse from CSS pixels (top-left origin) into the same coordinate
  // space as uv (centred, normalised by R.y, y-flipped for WebGL).
  if (u_mouse.x >= 0.0) {
    vec2 mouseUV = (vec2(u_mouse.x, R.y - u_mouse.y) - .5 * R) / R.y;
    float dist   = length(uv - mouseUV);
    vec2  dir    = dist > 0.001 ? normalize(uv - mouseUV) : vec2(0.0);
    // Soft Gaussian falloff — radius ≈ 0.28 uv units, gentle strength
    float falloff = exp(-dist * dist / 0.07);
    uv += dir * 0.16 * falloff;
  }
  // ────────────────────────────────────────────────────────────────────────

  vec3 col = vec3(1);
  uv.x += .25;
  uv   *= vec2(2, 1);

  float n = fbm(uv * .28 - vec2(T * .01, 0.));
  n = noise(uv * 3. + n * 2.);

  col.r -= fbm(uv           + vec2(0., T * .015) + n);
  col.g -= fbm(uv * 1.003   + vec2(0., T * .015) + n + .003);
  col.b -= fbm(uv * 1.006   + vec2(0., T * .015) + n + .006);

  col = mix(col, u_color, dot(col, vec3(.21, .71, .07)));
  col = mix(vec3(.08), col, min(time * .1, 1.));
  col = clamp(col, .08, 1.);
  O   = vec4(col, 1.);
}`;

// ---------------------------------------------------------------------------
// Typed uniform location store
// ---------------------------------------------------------------------------
interface UniformLocations {
  resolution: WebGLUniformLocation | null;
  time:       WebGLUniformLocation | null;
  u_color:    WebGLUniformLocation | null;
  u_mouse:    WebGLUniformLocation | null;
}

// ---------------------------------------------------------------------------
// Renderer class
// ---------------------------------------------------------------------------
class Renderer {
  private readonly vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main() { gl_Position = position; }`;

  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  private readonly gl: WebGL2RenderingContext;
  private readonly canvas: HTMLCanvasElement;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private uniforms: UniformLocations | null = null;
  private color: [number, number, number] = [0.5, 0.5, 0.5];
  private mouse: [number, number] = [-1, -1];       // smoothed value sent to GPU
  private targetMouse: [number, number] = [-1, -1]; // raw cursor position

  constructor(canvas: HTMLCanvasElement, fragmentSource: string) {
    this.canvas = canvas;
    const ctx = canvas.getContext("webgl2");
    if (!ctx) throw new Error("WebGL2 is not supported in this browser.");
    this.gl = ctx;
    this.setup(fragmentSource);
    this.init();
  }

  updateColor(newColor: [number, number, number]): void {
    this.color = newColor;
  }

  /** Set target mouse position in CSS pixels — smoothed each frame. */
  updateMouse(x: number, y: number): void {
    const dpr = Math.max(1, window.devicePixelRatio);
    this.targetMouse = [x * dpr, y * dpr];
    // Snap on first touch so there's no long slide-in from off-screen
    if (this.mouse[0] < 0) this.mouse = [...this.targetMouse];
  }

  /** Disable distortion smoothly when cursor leaves the window. */
  clearMouse(): void {
    this.targetMouse = [-1, -1];
  }

  updateScale(): void {
    const dpr = Math.max(1, window.devicePixelRatio);
    this.canvas.width  = window.innerWidth  * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private compile(shader: WebGLShader, source: string): void {
    const { gl } = this;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    }
  }

  reset(): void {
    const { gl, program, vs, fs } = this;
    if (!program) return;
    if (vs) { gl.detachShader(program, vs); gl.deleteShader(vs); }
    if (fs) { gl.detachShader(program, fs); gl.deleteShader(fs); }
    gl.deleteProgram(program);
    this.program = null;
  }

  private setup(fragmentSource: string): void {
    const { gl } = this;
    const vs      = gl.createShader(gl.VERTEX_SHADER);
    const fs      = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;

    this.vs = vs;
    this.fs = fs;
    this.compile(vs, this.vertexSrc);
    this.compile(fs, fragmentSource);

    this.program = program;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
    }
  }

  private init(): void {
    const { gl, program } = this;
    if (!program) return;

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    this.uniforms = {
      resolution: gl.getUniformLocation(program, "resolution"),
      time:       gl.getUniformLocation(program, "time"),
      u_color:    gl.getUniformLocation(program, "u_color"),
      u_mouse:    gl.getUniformLocation(program, "u_mouse"),
    };
  }

  render(now = 0): void {
    const { gl, program, buffer, canvas, uniforms } = this;
    if (!program || !gl.isProgram(program) || !uniforms) return;

    // Lerp smoothed mouse toward target (0.07 = responsive yet silky)
    const k = 0.07;
    if (this.targetMouse[0] >= 0) {
      this.mouse[0] += (this.targetMouse[0] - this.mouse[0]) * k;
      this.mouse[1] += (this.targetMouse[1] - this.mouse[1]) * k;
    } else if (this.mouse[0] >= 0) {
      // Ease out to off-screen when cursor leaves
      this.mouse[0] += (-50 - this.mouse[0]) * k * 0.4;
      this.mouse[1] += (-50 - this.mouse[1]) * k * 0.4;
      if (Math.abs(this.mouse[0] + 50) < 2) this.mouse = [-1, -1];
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time,       now * 1e-3);
    gl.uniform3fv(uniforms.u_color,   this.color);
    gl.uniform2fv(uniforms.u_mouse,   this.mouse);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------
function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : null;
}

// ---------------------------------------------------------------------------
// React component
// ---------------------------------------------------------------------------
export interface SmokeBackgroundProps {
  smokeColor?: string;
  className?:  string;
}

export const SmokeBackground: React.FC<SmokeBackgroundProps> = ({
  smokeColor = "#808080",
  className  = "",
}) => {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  // Initialise WebGL + render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer(canvas, fragmentShaderSource);
    } catch (e) {
      console.error(e);
      return;
    }
    rendererRef.current = renderer;

    const handleResize = () => renderer.updateScale();
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Mouse tracking — distort smoke around cursor
    const handleMouseMove = (e: MouseEvent) => renderer.updateMouse(e.clientX, e.clientY);
    const handleMouseLeave = () => renderer.clearMouse();
    window.addEventListener("mousemove",  handleMouseMove,  { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    let rafId: number;
    const loop = (now: number) => {
      renderer.render(now);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize",     handleResize);
      window.removeEventListener("mousemove",  handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
      renderer.reset();
    };
  }, []);

  // Sync colour prop
  useEffect(() => {
    const renderer = rendererRef.current;
    if (!renderer) return;
    const rgb = hexToRgb(smokeColor);
    if (rgb) renderer.updateColor(rgb);
  }, [smokeColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block w-full h-full ${className}`}
    />
  );
};
