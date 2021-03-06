<template>
  <div class="aurora-bg">
    <div class="content--canvas"></div>
  </div>
</template>
<script>
import SimplexNoise from "simplex-noise";

export default {
  mounted() {
    "use strict";
    const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;
    const HALF_PI = 0.5 * PI;
    const TAU = 2 * PI;
    const TO_RAD = PI / 180;
    const floor = n => n | 0;
    const rand = n => n * random();
    const randIn = (min, max) => rand(max - min) + min;
    const randRange = n => n - rand(2 * n);
    const fadeIn = (t, m) => t / m;
    const fadeOut = (t, m) => (m - t) / m;
    const fadeInOut = (t, m) => {
      let hm = 0.5 * m;
      return abs(((t + hm) % m) - hm) / hm;
    };
    const dist = (x1, y1, x2, y2) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1);
    const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

    const rayCount = 500;
    const rayPropCount = 8;
    const rayPropsLength = rayCount * rayPropCount;
    const baseLength = 200;
    const rangeLength = 200;
    const baseSpeed = 0.05;
    const rangeSpeed = 0.1;
    const baseWidth = 10;
    const rangeWidth = 20;
    const baseHue = 120;
    const rangeHue = 60;
    const baseTTL = 50;
    const rangeTTL = 100;
    const noiseStrength = 100;
    const xOff = 0.0015;
    const yOff = 0.0015;
    const zOff = 0.0015;
    const backgroundColor = "hsla(220,60%,3%,1)";

    let container;
    let canvas;
    let ctx;
    let center;
    let tick;
    let simplex;
    let rayProps;

    this.setup = () => {
      this.createCanvas();
      this.resize();
      this.initRays();
      this.draw();
    }

    this.initRays = () => {
      tick = 0;
      simplex = new SimplexNoise();
      rayProps = new Float32Array(rayPropsLength);

      let i;

      for (i = 0; i < rayPropsLength; i += rayPropCount) {
        this.initRay(i);
      }
    }

    this.initRay = (i) => {
      let length, x, y1, y2, n, life, ttl, width, speed, hue;

      length = baseLength + rand(rangeLength);
      x = rand(canvas.a.width);
      y1 = center[1] + noiseStrength;
      y2 = center[1] + noiseStrength - length;
      n = simplex.noise3D(x * xOff, y1 * yOff, tick * zOff) * noiseStrength;
      y1 += n;
      y2 += n;
      life = 0;
      ttl = baseTTL + rand(rangeTTL);
      width = baseWidth + rand(rangeWidth);
      speed = baseSpeed + rand(rangeSpeed) * (round(rand(1)) ? 1 : -1);
      hue = baseHue + rand(rangeHue);

      rayProps.set([x, y1, y2, life, ttl, width, speed, hue], i);
    }

    this.drawRays = () => {
      let i;

      for (i = 0; i < rayPropsLength; i += rayPropCount) {
        this.updateRay(i);
      }
    }

    this.updateRay = (i) => {
      let i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i;
      let x, y1, y2, life, ttl, width, speed, hue;

      x = rayProps[i];
      y1 = rayProps[i2];
      y2 = rayProps[i3];
      life = rayProps[i4];
      ttl = rayProps[i5];
      width = rayProps[i6];
      speed = rayProps[i7];
      hue = rayProps[i8];

      this.drawRay(x, y1, y2, life, ttl, width, hue);

      x += speed;
      life++;

      rayProps[i] = x;
      rayProps[i4] = life;

      (this.checkBounds(x) || life > ttl) && this.initRay(i);
    }

    this.drawRay = (x, y1, y2, life, ttl, width, hue) => {
      let gradient;

      gradient = ctx.a.createLinearGradient(x, y1, x, y2);
      gradient.addColorStop(0, `hsla(${hue},100%,65%,0)`);
      gradient.addColorStop(
        0.5,
        `hsla(${hue},100%,65%,${fadeInOut(life, ttl)})`
      );
      gradient.addColorStop(1, `hsla(${hue},100%,65%,0)`);

      ctx.a.save();
      ctx.a.beginPath();
      ctx.a.strokeStyle = gradient;
      ctx.a.lineWidth = width;
      ctx.a.moveTo(x, y1);
      ctx.a.lineTo(x, y2);
      ctx.a.stroke();
      ctx.a.closePath();
      ctx.a.restore();
    }

    this.checkBounds = (x) => {
      return x < 0 || x > canvas.a.width;
    }

    this.createCanvas = () => {
      container = document.querySelector(".content--canvas");
      canvas = {
        a: document.createElement("canvas"),
        b: document.createElement("canvas")
      };
      canvas.b.style = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	`;
      container.appendChild(canvas.b);
      ctx = {
        a: canvas.a.getContext("2d"),
        b: canvas.b.getContext("2d")
      };
      center = [];
    }

    this.resize = () => {
      const { innerWidth, innerHeight } = window;

      canvas.a.width = innerWidth;
      canvas.a.height = innerHeight;

      ctx.a.drawImage(canvas.b, 0, 0);

      canvas.b.width = innerWidth;
      canvas.b.height = innerHeight;

      ctx.b.drawImage(canvas.a, 0, 0);

      center[0] = 0.5 * canvas.a.width;
      center[1] = 0.5 * canvas.a.height;
    }

    this.render = () => {
      ctx.b.save();
      ctx.b.filter = "blur(12px)";
      ctx.a.globalCompositeOperation = "lighter";
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    }

    this.draw = () => {
      tick++;
      ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.a.height);
      this.drawRays();
      this.render();

      if (!this.cancel) {
        window.requestAnimationFrame(this.draw);
      }
    }

    setTimeout(() => {
      this.setup();
    }, 100);

    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
    this.cancel = true;
  }
};
</script>
<style scoped>
</style>


