// Portafolio · Michelle Leal — traducción español / inglés
// El español se toma directamente del HTML; aquí solo se define el inglés.
// Para agregar un texto traducible: ponle data-i18n="clave" (texto),
// data-i18n-html="clave" (texto con etiquetas) o
// data-i18n-attr="atributo:clave;otro:clave" (atributos) y agrega la clave abajo.
(function () {
    const EN = {
        'meta.title': 'Michelle Leal · Portfolio',
        'meta.desc': 'Portfolio of Michelle Leal — QA Junior Engineer at NTT DATA, Front-End developer and graduate in Multimedia and Digital Animation.',
        'skip': 'Skip to content',

        'nav.home': 'Home',
        'nav.main': 'Main',
        'nav.about': 'About me',
        'nav.hobbies': 'Hobbies',
        'nav.education': 'Background',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.theme': 'Toggle theme',

        'hero.badge': 'Available for new projects',
        'hero.title': 'Hi, I\'m <span class="grad nowrap">Michelle Leal</span>,<br>\n                        and I build websites.',
        'hero.lead': 'Graduate of the Faculty of Physical and Mathematical Sciences with a degree in Multimedia and Digital Animation. I combine design, animation and code to create clear, engaging web experiences. I currently work in QA, performing manual and automated testing.',
        'hero.cta': 'View projects',
        'hero.cv': 'Résumé',
        'hero.alt': 'Illustration of Michelle Leal',
        'hero.chip': '✔ QA · Quality Assurance',

        'skills.kicker': '01 · Technologies',
        'skills.sub': 'The tools I have worked with.',
        'skills.html': 'Semantic structure',
        'skills.js': 'Interactivity and logic',
        'skills.css': 'Responsive design',
        'skills.bs': 'Fast layouts',

        'hobbies.kicker': '02 · Beyond code',
        'hobbies.sub': 'What inspires me and fuels my creativity.',
        'hobbies.read': 'Reading',
        'hobbies.write': 'Writing',
        'hobbies.research': 'Research',
        'hobbies.music': 'Music',

        'edu.kicker': '03 · Background',
        'edu.title': 'Education and work experience',
        'edu.sub': 'My academic and professional journey, from most recent to earliest.',
        'exp.alt': 'NTT DATA logo',
        'exp.date': 'June 2025 – Present',
        'exp.desc': 'QA team: designing and running manual and automated test cases.',
        'edu.d1': 'January 2019 – June 2025',
        'edu.t1': 'B.A. in Multimedia and Digital Animation',
        'edu.s1': 'Faculty of Physical and Mathematical Sciences · UANL',
        'edu.t2': 'UX Design training',
        'edu.t3': 'Web development courses',

        'proj.kicker': '04 · Work',
        'proj.title': 'Projects',
        'proj.sub': 'A selection of websites I have designed and built.',
        'proj.demo': 'Live demo',
        'proj.repo': 'Repository',
        'proj.p1.aria': 'View the Text Encryptor demo',
        'proj.p1.alt': 'Screenshot of the text encryptor page',
        'proj.p1.title': 'Text Encryptor',
        'proj.p1.desc': 'A text encryption page built as a course assignment at Alura Latam (Oracle ONE Challenge).',
        'proj.p2.aria': 'View the GL Logistics demo',
        'proj.p2.alt': 'Screenshot of the GL Logistics website',
        'proj.p2.desc': 'Website for a logistics company: home, about us, contact and shipment tracking.',

        'contact.kicker': '05 · Contact',
        'contact.title': 'Let\'s work together',
        'contact.sub': 'I\'m open to job opportunities, collaborations and freelance projects. Reach out through any of these channels.',
        'contact.cv': 'Download résumé',

        'footer.by': 'Built by <strong>Michelle Leal</strong>',
        'totop': 'Back to top',

        // Botón de idioma
        'lang.switch': 'Cambiar a español'
    };
    const ES_EXTRA = {
        'meta.title': document.title,
        'lang.switch': 'Switch to English'
    };

    const root = document.documentElement;
    const ES = {};
    let snapshotTaken = false;

    // Guarda el texto original en español la primera vez
    function snapshot() {
        if (snapshotTaken) return;
        snapshotTaken = true;
        document.querySelectorAll('[data-i18n]').forEach((el) => { ES[el.dataset.i18n] = el.textContent; });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => { ES[el.dataset.i18nHtml] = el.innerHTML; });
        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            el.dataset.i18nAttr.split(';').forEach((pair) => {
                const [attr, key] = pair.split(':');
                if (!(key in ES)) ES[key] = el.getAttribute(attr);
            });
        });
        Object.assign(ES, ES_EXTRA);
    }

    function apply(lang) {
        snapshot();
        const dict = lang === 'en' ? EN : ES;
        const t = (k) => (k in dict ? dict[k] : ES[k]);

        document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            el.dataset.i18nAttr.split(';').forEach((pair) => {
                const [attr, key] = pair.split(':');
                el.setAttribute(attr, t(key));
            });
        });
        document.title = t('meta.title');
        root.setAttribute('lang', lang);

        // El botón muestra el idioma al que se puede cambiar
        const btn = document.getElementById('langToggle');
        const code = document.getElementById('langCode');
        if (btn) {
            btn.setAttribute('aria-label', t('lang.switch'));
            btn.setAttribute('title', t('lang.switch'));
        }
        if (code) code.textContent = lang === 'en' ? 'ES' : 'EN';
    }

    function setLang(lang) {
        try { localStorage.setItem('idioma', lang); } catch (e) {}
        apply(lang);
    }

    document.addEventListener('DOMContentLoaded', function () {
        apply(root.getAttribute('lang') === 'en' ? 'en' : 'es');
        const btn = document.getElementById('langToggle');
        if (btn) {
            btn.addEventListener('click', () => {
                setLang(root.getAttribute('lang') === 'en' ? 'es' : 'en');
            });
        }
    });
})();
