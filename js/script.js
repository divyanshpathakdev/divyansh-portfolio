const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.midNav');

btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    });
});

// ---------- DARK / LIGHT MODE ----------
const themeBtn = document.querySelector('.theme-btn');
const root = document.documentElement;

themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { }
});