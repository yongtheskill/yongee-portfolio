<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { Linkedin, Github, Bars, Times } from '@vicons/fa';
import { Icon } from '@vicons/utils';
import { ref, computed, watch } from 'vue';
import { useTheme } from './composables/useTheme';
import ParticleGalaxy from './components/ParticleGalaxy.vue';
import WireframeHero from './components/WireframeHero.vue';

const route = useRoute();
const { theme, toggleTheme } = useTheme();

const menuOpen = ref(false);

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

// Close mobile menu on route change
watch(() => route.path, () => {
  menuOpen.value = false;
});

const themeLabel = computed(() => theme.value === 'cosmos' ? '◈ Cosmos' : '⟁ Cyber');
</script>

<template>
  <div class="min-h-dvh relative" :style="{ background: 'var(--bg-primary)' }">
    <!-- Three.js Background -->
    <ParticleGalaxy v-if="theme === 'cosmos'" />
    <WireframeHero v-else />

    <!-- Scanline overlay for cyber theme -->
    <div v-if="theme === 'cyber'" class="scanline-overlay" />

    <!-- Navigation -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :style="{ background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }"
    >
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-18">
          <!-- Logo -->
          <RouterLink
            to="/"
            class="font-display text-lg sm:text-xl font-bold tracking-wider"
            :style="{ color: 'var(--text-primary)' }"
          >
            <span :style="{ color: 'var(--accent-1)' }">Y</span>ong
            <span :style="{ color: 'var(--accent-1)' }">E</span>e
          </RouterLink>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-1">
            <RouterLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="nav-link px-4 py-2 text-sm font-body tracking-wide"
              :class="{ active: route.path === link.to }"
            >
              {{ link.label }}
            </RouterLink>

            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="ml-4 px-3 py-1.5 text-xs font-body rounded-full border transition-all duration-300 hover:scale-105"
              :style="{
                borderColor: 'var(--border-color)',
                color: 'var(--accent-1)',
                background: 'var(--bg-card)',
              }"
            >
              {{ themeLabel }}
            </button>
          </div>

          <!-- Mobile Hamburger -->
          <div class="flex items-center gap-3 md:hidden">
            <button
              @click="toggleTheme"
              class="px-2 py-1 text-xs font-body rounded-full border"
              :style="{
                borderColor: 'var(--border-color)',
                color: 'var(--accent-1)',
                background: 'var(--bg-card)',
              }"
            >
              {{ theme === 'cosmos' ? '◈' : '⟁' }}
            </button>
            <button
              @click="menuOpen = !menuOpen"
              class="p-2"
              :style="{ color: 'var(--text-primary)' }"
            >
              <Icon size="22">
                <Times v-if="menuOpen" />
                <Bars v-else />
              </Icon>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-40 md:hidden flex flex-col pt-16"
        :style="{ background: 'var(--bg-primary)', opacity: 0.98 }"
      >
        <nav class="flex flex-col items-center justify-center flex-1 gap-2">
          <RouterLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            @click="menuOpen = false"
            class="text-2xl font-display font-semibold py-3 px-8 transition-all duration-300 w-full text-center"
            :style="{
              color: route.path === link.to ? 'var(--accent-1)' : 'var(--text-secondary)',
              animationDelay: `${index * 0.05}s`,
            }"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <!-- Mobile Social Links -->
        <div class="flex items-center justify-center gap-6 pb-10">
          <a
            href="https://www.linkedin.com/in/yongee/"
            target="_blank"
            class="transition-colors duration-300"
            :style="{ color: 'var(--text-muted)' }"
          >
            <Icon size="24"><Linkedin /></Icon>
          </a>
          <a
            href="https://github.com/yongtheskill"
            target="_blank"
            class="transition-colors duration-300"
            :style="{ color: 'var(--text-muted)' }"
          >
            <Icon size="24"><Github /></Icon>
          </a>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <main class="relative z-10 pt-16 md:pt-18">
      <RouterView v-slot="{ Component, route: viewRoute }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="viewRoute.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer
      class="relative z-10 border-t py-8 px-4 sm:px-6 lg:px-8"
      :style="{ borderColor: 'var(--border-color)' }"
    >
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm font-body" :style="{ color: 'var(--text-muted)' }">
          © 2026 Yong Ee · Built with Vue & Three.js
        </p>
        <div class="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/yongee/"
            target="_blank"
            class="transition-all duration-300 hover:scale-110"
            :style="{ color: 'var(--text-muted)' }"
            @mouseenter="$event.target.style.color = 'var(--accent-1)'"
            @mouseleave="$event.target.style.color = 'var(--text-muted)'"
          >
            <Icon size="20"><Linkedin /></Icon>
          </a>
          <a
            href="https://github.com/yongtheskill"
            target="_blank"
            class="transition-all duration-300 hover:scale-110"
            :style="{ color: 'var(--text-muted)' }"
            @mouseenter="$event.target.style.color = 'var(--accent-1)'"
            @mouseleave="$event.target.style.color = 'var(--text-muted)'"
          >
            <Icon size="20"><Github /></Icon>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
