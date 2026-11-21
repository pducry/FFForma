// ─── Theme toggle (dark is home; light is a visit) ───
const themeStore = {
  get() { try { return localStorage.getItem('ffforma-theme'); } catch (_) { return null; } },
  set(v) { try { localStorage.setItem('ffforma-theme', v); } catch (_) {} }
};

const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.dataset.theme = 'light';
  } else {
    delete document.documentElement.dataset.theme;
  }
  if (themeMeta) themeMeta.content = theme === 'light' ? '#f2f0ec' : '#0b0a09';
  document.getElementById('themeToggle').setAttribute('aria-label',
    theme === 'light' ? 'Toggle dark mode' : 'Toggle light mode');
  themeStore.set(theme);
}

document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
});

applyTheme(themeStore.get() === 'light' ? 'light' : 'dark');
