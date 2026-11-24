// Portafolio · Michelle Leal — interacciones
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;

    // ----- Tema claro / oscuro (se recuerda entre visitas) -----
    const themeBtn = document.getElementById('themeToggle');
    const setTheme = (t) => {
        root.setAttribute('data-theme', t);
        try { localStorage.setItem('tema', t); } catch (e) {}
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', t === 'light' ? '#fbf4f0' : '#0f0d12');
    };
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
        });
    }

    // ----- Menú móvil -----
    const menuBtn = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const closeMenu = () => {
        menu.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menú');
    };
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const open = menu.classList.toggle('is-open');
            menuBtn.setAttribute('aria-expanded', String(open));
            menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        });
        menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    }

    // ----- Barra con borde al hacer scroll + botón "volver arriba" -----
    const nav = document.getElementById('nav');
    const toTop = document.getElementById('toTop');
    const onScroll = () => {
        const y = window.scrollY;
        if (nav) nav.classList.toggle('is-scrolled', y > 10);
        if (toTop) toTop.classList.toggle('is-visible', y > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ----- Animación de aparición -----
    const items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        items.forEach((el, i) => {
            el.style.transitionDelay = (i % 4) * 70 + 'ms';
            io.observe(el);
        });
    } else {
        items.forEach((el) => el.classList.add('is-in'));
    }

    // ----- Enlace activo según la sección visible -----
    const links = Array.from(document.querySelectorAll('.nav__links a'));
    const sections = links
        .map((a) => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach((s) => spy.observe(s));
    }

    // ----- Año actual en el pie de página -----
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});
