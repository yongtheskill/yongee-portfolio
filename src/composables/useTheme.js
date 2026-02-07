import { ref, watch, readonly } from 'vue';

const THEME_KEY = 'portfolio-theme';

// 'cosmos' = Option C (Organic Cosmos), 'cyber' = Option A (Cyberpunk Terminal)
const theme = ref(localStorage.getItem(THEME_KEY) || 'cosmos');

watch(theme, (val) => {
  localStorage.setItem(THEME_KEY, val);
  document.documentElement.setAttribute('data-theme', val);
});

// Initialize on first load
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', theme.value);
}

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'cosmos' ? 'cyber' : 'cosmos';
  };

  const setTheme = (t) => {
    theme.value = t;
  };

  const isCosmos = () => theme.value === 'cosmos';
  const isCyber = () => theme.value === 'cyber';

  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme,
    isCosmos,
    isCyber,
  };
}
