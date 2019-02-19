<template>
  <div class="coalesce-bg">
    <div class="content--canvas"></div>
  </div>
</template>
<script>
import SimplexNoise from "simplex-noise";

export default {
  mounted() {
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

    const particleCount = 700;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const baseTTL = 100;
    const rangeTTL = 500;
    const baseSpeed = 0.1;
    const rangeSpeed = 1;
    const baseSize = 2;
    const rangeSize = 10;
    const baseHue = 10;
    const rangeHue = 100;
    const noiseSteps = 2;
    const xOff = 0.0025;
    const yOff = 0.005;
    const zOff = 0.0005;
    const backgroundColor = "hsla(60,50%,3%,1)";

    let container;
    let canvas;
    let ctx;
    let center;
    let gradient;
    let tick;
    let particleProps;
    let positions;
    let velocities;
    let lifeSpans;
    let speeds;
    let sizes;
    let hues;

    this.setup = () => {
      this.createCanvas();
      this.resize();
      this.initParticles();
      this.draw();
    };

    this.initParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);

      let i;

      for (i = 0; i < particlePropsLength; i += particlePropCount) {
        this.initParticle(i);
      }
    };

    this.initParticle = i => {
      let theta, x, y, vx, vy, life, ttl, speed, size, hue;

      x = rand(canvas.a.width);
      y = rand(canvas.a.height);
      theta = angle(x, y, center[0], center[1]);
      vx = cos(theta) * 6;
      vy = sin(theta) * 6;
      life = 0;
      ttl = baseTTL + rand(rangeTTL);
      speed = baseSpeed + rand(rangeSpeed);
      size = baseSize + rand(rangeSize);
      hue = baseHue + rand(rangeHue);

      particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
    };

    this.drawParticles = () => {
      let i;

      for (i = 0; i < particlePropsLength; i += particlePropCount) {
        this.updateParticle(i);
      }
    };

    this.updateParticle = i => {
      let i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;
      let x, y, theta, vx, vy, life, ttl, speed, x2, y2, size, hue;

      x = particleProps[i];
      y = particleProps[i2];
      theta = angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;
      vx = lerp(particleProps[i3], 2 * cos(theta), 0.05);
      vy = lerp(particleProps[i4], 2 * sin(theta), 0.05);
      life = particleProps[i5];
      ttl = particleProps[i6];
      speed = particleProps[i7];
      x2 = x + vx * speed;
      y2 = y + vy * speed;
      size = particleProps[i8];
      hue = particleProps[i9];

      this.drawParticle(x, y, theta, life, ttl, size, hue);

      life++;

      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      life > ttl && this.initParticle(i);
    };

    this.drawParticle = (x, y, theta, life, ttl, size, hue) => {
      let xRel = x - 0.5 * size,
        yRel = y - 0.5 * size;

      ctx.a.save();
      ctx.a.lineCap = "round";
      ctx.a.lineWidth = 1;
      ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.a.beginPath();
      ctx.a.translate(xRel, yRel);
      ctx.a.rotate(theta);
      ctx.a.translate(-xRel, -yRel);
      ctx.a.strokeRect(xRel, yRel, size, size);
      ctx.a.closePath();
      ctx.a.restore();
    };

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
    };

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
    };

    this.renderGlow = () => {
      ctx.b.save();
      ctx.b.filter = "blur(8px) brightness(200%)";
      ctx.b.globalCompositeOperation = "lighter";
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.filter = "blur(4px) brightness(200%)";
      ctx.b.globalCompositeOperation = "lighter";
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    };

    this.render = () => {
      ctx.b.save();
      ctx.b.globalCompositeOperation = "lighter";
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    };

    this.draw = () => {
      tick++;
      console.log("Draw");

      ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);

      this.drawParticles();
      this.renderGlow();
      this.render();
      if (!this.cancel) {
        window.requestAnimationFrame(this.draw);
      }
    };

    setTimeout(() => {
      this.setup();
    }, 100);

    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    this.cancel = true;
    window.removeEventListener("resize", this.resize);
  }
};
</script>
<style scoped>
</style>


