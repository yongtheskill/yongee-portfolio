<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const canvas = ref(null);
let renderer, scene, camera, mesh, animationId;
let mouseX = 0;
let mouseY = 0;

function init() {
  if (!canvas.value) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Wireframe icosahedron
  const geometry = new THREE.IcosahedronGeometry(2.2, 1);
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  mesh = new THREE.Mesh(geometry, wireframeMaterial);
  scene.add(mesh);

  // Inner glow sphere
  const innerGeo = new THREE.IcosahedronGeometry(2.0, 2);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0xff2d95,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  mesh.add(innerMesh);
  innerMesh.rotation.x = 0.5;
  innerMesh.rotation.z = 0.3;

  // Outer glow ring
  const ringGeo = new THREE.TorusGeometry(3, 0.01, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    transparent: true,
    opacity: 0.15,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI * 0.5;
  mesh.add(ring);

  animate();
}

function animate() {
  animationId = requestAnimationFrame(animate);

  if (mesh) {
    const time = Date.now() * 0.0003;
    mesh.rotation.y = time + mouseX * 0.001;
    mesh.rotation.x = Math.sin(time * 0.7) * 0.3 + mouseY * 0.001;
    mesh.rotation.z = Math.sin(time * 0.5) * 0.1;
  }

  renderer.render(scene, camera);
}

function onResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  mouseX = (e.clientX - window.innerWidth / 2);
  mouseY = (e.clientY - window.innerHeight / 2);
}

onMounted(() => {
  init();
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove, { passive: true });
});

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
  window.removeEventListener('resize', onResize);
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
