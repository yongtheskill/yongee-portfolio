<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  animation: {
    type: String,
    default: 'reveal', // 'reveal', 'reveal-left', 'reveal-scale'
  },
  delay: {
    type: Number,
    default: 0,
  },
  threshold: {
    type: Number,
    default: 0.15,
  },
});

const el = ref(null);
let observer = null;

onMounted(() => {
  if (!el.value) return;

  // Set custom delay
  if (props.delay > 0) {
    el.value.style.transitionDelay = `${props.delay}s`;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  observer.observe(el.value);
});

onBeforeUnmount(() => {
  if (observer && el.value) {
    observer.unobserve(el.value);
  }
});
</script>

<template>
  <div ref="el" :class="animation">
    <slot />
  </div>
</template>
