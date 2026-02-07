<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';

const canvas = ref(null);
let renderer, scene, camera, particles, animationId;
let scrollY = 0;
let mouseX = 0;
let mouseY = 0;

function createGalaxy() {
  const count = 6000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const palette = [
    new THREE.Color('#8b5cf6'),
    new THREE.Color('#0d9488'),
    new THREE.Color('#f97316'),
    new THREE.Color('#6366f1'),
    new THREE.Color('#a78bfa'),
  ];

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // Disk-shaped galaxy distribution
    const radius = Math.random() * 18 + 1;
    const spinAngle = radius * 2.5;
    const branchAngle = ((i % 3) / 3) * Math.PI * 2;
    const angle = branchAngle + spinAngle;

    const randomX = (Math.random() - 0.5) * Math.pow(Math.random(), 2) * radius * 0.6;
    const randomY = (Math.random() - 0.5) * Math.pow(Math.random(), 2) * 2.5;
    const randomZ = (Math.random() - 0.5) * Math.pow(Math.random(), 2) * radius * 0.6;

    positions[i3] = Math.cos(angle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(angle) * radius + randomZ;

    const color = palette[Math.floor(Math.random() * palette.length)];
    const mixFactor = Math.random() * 0.5;
    const mixedColor = color.clone().lerp(new THREE.Color('#ffffff'), mixFactor);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    sizes[i] = Math.random() * 3 + 0.5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.06,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return new THREE.Points(geometry, material);
}

function init() {
  if (!canvas.value) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 5, 14);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  particles = createGalaxy();
  scene.add(particles);

  animate();
}

function animate() {
  animationId = requestAnimationFrame(animate);

  if (particles) {
    const time = Date.now() * 0.0001;
    particles.rotation.y = time * 0.8 + scrollY * 0.0003;
    particles.rotation.x = Math.sin(time * 0.5) * 0.1 + mouseY * 0.0001;
    particles.position.x = mouseX * 0.0005;
  }

  renderer.render(scene, camera);
}

function onResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onScroll() {
  scrollY = window.scrollY || document.documentElement.scrollTop;
}

function onMouseMove(e) {
  mouseX = (e.clientX - window.innerWidth / 2);
  mouseY = (e.clientY - window.innerHeight / 2);
}

onMounted(() => {
  init();
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('mousemove', onMouseMove, { passive: true });
});

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
  window.removeEventListener('resize', onResize);
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('mousemove', onMouseMove);
});
</script>

<template>
  <canvas
    ref="canvas"
    class="fixed inset-0 w-full h-full pointer-events-none"
    style="z-index: 0"
  />
</template>
