<script setup>
import { useMouse } from '@vueuse/core';
import { reactive, watch, ref } from 'vue';
import { RouterLink } from 'vue-router';

function getGradientStyle(x, y) {
  const xOffset = x * 15 + 10;
  const yOffset = y * 25 + 10;
  return `radial-gradient(circle 90cqmin at ${50 - xOffset}% ${
    50 - yOffset
  }%, #4d5bce66, transparent), radial-gradient(circle 90cqmin at ${50 + xOffset}% ${
    50 + yOffset
  }%, #dc262666, transparent)`;
}

const mouse = reactive(useMouse());
const gradientStyle = ref(getGradientStyle(0.5, 0.5));

watch(mouse, (n) => {
  const x = n.x / window.innerWidth;
  const y = n.y / window.innerHeight;
  gradientStyle.value = getGradientStyle(x, y);
});
</script>

<template>
  <main
    class="h-full flex items-center justify-center bg-slate-900"
    :style="{
      background: gradientStyle,
    }">
    <div class="flex">
      <div class="px-10">
        <div class="text-white text-base md:text-lg">Hi! My name is</div>
        <h1 class="text-white text-6xl md:text-8xl font-semibold">Yong Ee</h1>
        <h2 class="text-blue-400 text-xl md:text-3xl pt-3">> Software Engineer</h2>
        <div class="pt-5 text-slate-400 text-sm md:text-base">
          // get to know me at
          <RouterLink to="/about" class="underline text-orange-400">about-me</RouterLink>
        </div>
        <div class="text-slate-400 text-sm md:text-base">
          // see my past work at
          <RouterLink to="/projects" class="underline text-orange-400">projects</RouterLink>
        </div>
      </div>
      <div></div>
    </div>
  </main>
</template>
