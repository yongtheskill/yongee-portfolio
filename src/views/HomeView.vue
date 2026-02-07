<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();
const loaded = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });
});
</script>

<template>
  <section class="min-h-[calc(100dvh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{ background: 'var(--gradient-hero)' }"
    />

    <div class="relative z-10 max-w-4xl mx-auto text-center sm:text-left w-full">
      <!-- Greeting line -->
      <div
        class="overflow-hidden mb-3 sm:mb-4"
        :class="{ 'translate-y-0 opacity-100': loaded, 'translate-y-8 opacity-0': !loaded }"
        style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
      >
        <p
          class="text-sm sm:text-base font-body tracking-widest uppercase"
          :style="{ color: 'var(--accent-2)' }"
        >
          <span v-if="theme === 'cyber'" class="crt-glow">// Hello, World</span>
          <span v-else>✦ Hello, I'm</span>
        </p>
      </div>

      <!-- Name -->
      <div
        class="overflow-hidden mb-4 sm:mb-6"
        :class="{ 'translate-y-0 opacity-100': loaded, 'translate-y-12 opacity-0': !loaded }"
        style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s"
      >
        <h1
          class="font-display font-extrabold tracking-tight leading-none glitch-text glow-text"
          :style="{ color: 'var(--text-primary)', fontSize: 'clamp(3rem, 12vw, 8rem)' }"
        >
          Yong Ee
        </h1>
      </div>

      <!-- Role -->
      <div
        class="overflow-hidden mb-6 sm:mb-8"
        :class="{ 'translate-y-0 opacity-100': loaded, 'translate-y-8 opacity-0': !loaded }"
        style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
      >
        <h2
          class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
          :style="{ color: 'var(--accent-1)' }"
        >
          <span v-if="theme === 'cyber'">&gt; Software_Engineer</span>
          <span v-else>Software Engineer</span>
        </h2>
      </div>

      <!-- Description -->
      <div
        class="overflow-hidden mb-8 sm:mb-10"
        :class="{ 'translate-y-0 opacity-100': loaded, 'translate-y-8 opacity-0': !loaded }"
        style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s"
      >
        <p
          class="font-body text-base sm:text-lg max-w-xl mx-auto sm:mx-0 leading-relaxed"
          :style="{ color: 'var(--text-secondary)' }"
        >
          Building impactful software solutions from Singapore.
          <br class="hidden sm:block" />
          Passionate about full-stack development, AI, and creating tools that matter.
        </p>
      </div>

      <!-- CTAs -->
      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start"
        :class="{ 'translate-y-0 opacity-100': loaded, 'translate-y-8 opacity-0': !loaded }"
        style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s"
      >
        <RouterLink
          to="/projects"
          class="group font-body text-sm sm:text-base px-7 py-3 rounded-full border font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          :style="{
            borderColor: 'var(--accent-1)',
            color: 'var(--text-primary)',
            background: 'rgba(139, 92, 246, 0.1)',
          }"
        >
          View Projects
          <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="font-body text-sm sm:text-base px-7 py-3 rounded-full border transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          :style="{
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }"
        >
          About Me
        </RouterLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      :class="{ 'opacity-100': loaded, 'opacity-0': !loaded }"
      style="transition: opacity 1.5s ease 1.2s"
    >
      <span class="text-xs font-body tracking-widest uppercase" :style="{ color: 'var(--text-muted)' }">Scroll</span>
      <div
        class="w-px h-8 animate-pulse"
        :style="{ background: 'linear-gradient(to bottom, var(--accent-1), transparent)' }"
      />
    </div>
  </section>
</template>
