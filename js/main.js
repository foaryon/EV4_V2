/**
 * KIA EV4 Systemanalyse – Frontend-Enhancements
 * Scroll-Spy (aktiver Nav-Link), Back-to-Top, optional Details-State.
 */
(function () {
    'use strict';

    const BACK_TO_TOP_THRESHOLD = 400;
    const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /** Scrolls to anchor; manual scroll so target top sits just below nav (measured). */
    function scrollToAnchor(id) {
        var target = document.getElementById(id);
        if (!target) return;
        history.replaceState(null, '', '#' + id);
        function doScroll() {
            var nav = document.querySelector('nav');
            var offset = nav ? nav.offsetHeight : 0;
            var rect = target.getBoundingClientRect();
            var y = rect.top + window.scrollY - offset;
            window.scrollTo({ top: Math.max(0, y), left: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
        }
        requestAnimationFrame(function () {
            requestAnimationFrame(doScroll);
        });
    }

    /** Klont page-nav aus aside in Nav-Drawer (Single Source of Truth für „Auf dieser Seite“). */
    function initPageNavClone() {
        var source = document.getElementById('page-nav-source');
        var target = document.getElementById('nav-page-nav-target');
        if (!source || !target) return;
        var nav = source.querySelector('nav');
        if (!nav) return;
        target.appendChild(nav.cloneNode(true));
    }

    function initScrollSpy() {
        const navBar = document.querySelector('nav');
        const navLinks = document.querySelector('nav .nav-links');
        if (!navLinks || !navBar) return;

        const links = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
        const targets = links
            .map(function (a) {
                const href = a.getAttribute('href') || '';
                const id = href.slice(1);
                if (!id) return null;
                const el = document.getElementById(id);
                return el ? { id, link: a, el } : null;
            })
            .filter(Boolean);

        if (targets.length === 0) return;

        function getNavOffset() {
            return navBar ? navBar.offsetHeight + 8 : 120;
        }

        function setActive() {
            var hashId = window.location.hash ? window.location.hash.slice(1) : '';
            var hashTarget = hashId ? targets.find(function (t) { return t.id === hashId; }) : null;
            var current = hashTarget || null;
            if (!current) {
                const scrollY = window.scrollY || window.pageYOffset;
                const offset = getNavOffset();
                for (let i = targets.length - 1; i >= 0; i--) {
                    const top = targets[i].el.getBoundingClientRect().top + scrollY - offset;
                    if (scrollY >= top - 10) {
                        current = targets[i];
                        break;
                    }
                }
            }
            if (!current && targets[0]) current = targets[0];
            targets.forEach(function (t) {
                t.link.classList.toggle('is-active', t === current);
                if (t === current) {
                    t.link.setAttribute('aria-current', 'location');
                } else {
                    t.link.removeAttribute('aria-current');
                }
            });
            var sidebarLinks = document.querySelectorAll('.page-nav a[href^="#"]');
            sidebarLinks.forEach(function (a) {
                var id = (a.getAttribute('href') || '').slice(1);
                if (!id) return;
                var isActive = current && id === current.id;
                a.classList.toggle('is-active', isActive);
                if (isActive) {
                    a.setAttribute('aria-current', 'location');
                } else {
                    a.removeAttribute('aria-current');
                }
            });
        }

        setActive();
        window.addEventListener('scroll', REDUCED_MOTION ? setActive : throttle(setActive, 100), { passive: true });
        window.addEventListener('resize', throttle(setActive, 150));
        window.addEventListener('hashchange', setActive);
    }

    function initBackToTop() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Nach oben scrollen');
        btn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span>';
        document.body.appendChild(btn);

        function toggle() {
            const show = (window.scrollY || window.pageYOffset) > BACK_TO_TOP_THRESHOLD;
            btn.classList.toggle('is-visible', show);
        }

        toggle();
        window.addEventListener('scroll', throttle(toggle, 150), { passive: true });
        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
            btn.blur();
        });
    }

    /** Scroll-Reveal: sections get .is-visible when entering viewport (respects prefers-reduced-motion). */
    function initScrollReveal() {
        if (REDUCED_MOTION) return;
        const sections = document.querySelectorAll('main section');
        if (!sections.length) return;
        sections.forEach(function (el) {
            el.classList.add('scroll-reveal');
        });
        const io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0 }
        );
        sections.forEach(function (el) {
            io.observe(el);
        });
    }

    function throttle(fn, ms) {
        let last = 0;
        return function () {
            const now = Date.now();
            if (now - last >= ms) {
                last = now;
                fn();
            }
        };
    }

    function initChangelogModal() {
        const dialog = document.getElementById('changelog-dialog');
        const body = dialog && dialog.querySelector('.changelog-modal-body');
        if (!dialog || !body) return;

        let cached = null;

        function escapeHtml(str) {
            if (str == null) return '';
            var s = String(str);
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        /** Erlaubte Changelog-Tags; Rest wird escaped (XSS-Härtung). */
        function safeHtmlChangelog(str) {
            if (str == null) return '';
            var s = String(str);
            var escaped = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            return escaped
                .replace(/&lt;strong&gt;/gi, '<strong>').replace(/&lt;\/strong&gt;/gi, '</strong>')
                .replace(/&lt;code&gt;/gi, '<code>').replace(/&lt;\/code&gt;/gi, '</code>')
                .replace(/&lt;em&gt;/gi, '<em>').replace(/&lt;\/em&gt;/gi, '</em>');
        }

        function renderChanges(changes) {
            if (typeof changes === 'string') {
                return safeHtmlChangelog(changes);
            }
            if (Array.isArray(changes)) {
                return '<ul class="changelog-td">' + changes.map(function (c) {
                    return '<li>' + safeHtmlChangelog(c) + '</li>';
                }).join('') + '</ul>';
            }
            return '';
        }

        function renderTable(entries) {
            var rows = entries.map(function (e) {
                return '<tr><td><strong>' + escapeHtml(e.version) + '</strong></td><td>' + escapeHtml(e.date) + '</td><td>' + renderChanges(e.changes) + '</td></tr>';
            }).join('');
            return '<div class="responsive-table-wrapper"><table><thead><tr><th scope="col">Version</th><th scope="col">Datum</th><th scope="col">Änderungen</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
        }

        function useFallbackData() {
            var el = document.getElementById('changelog-data');
            if (!el || !el.textContent) return null;
            try {
                return JSON.parse(el.textContent.trim());
            } catch (err) {
                return null;
            }
        }

        function loadAndShow() {
            if (cached) {
                body.innerHTML = renderTable(cached);
                initAdaptiveTables(body);
                return;
            }
            body.innerHTML = '<p class="changelog-loading" aria-live="polite">Laden…</p>';
            fetch('changelog.json')
                .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('Netzwerkfehler')); })
                .then(function (data) {
                    cached = data;
                    body.innerHTML = renderTable(data);
                    initAdaptiveTables(body);
                })
                .catch(function () {
                    var data = useFallbackData();
                    if (data) {
                        cached = data;
                        body.innerHTML = renderTable(data);
                        initAdaptiveTables(body);
                    } else {
                        body.innerHTML = '<p class="changelog-loading">Changelog konnte nicht geladen werden. Bei Nutzung per Doppelklick (file://) bitte einen lokalen Webserver verwenden, z.&nbsp;B. <code>npx serve .</code> im Projektordner.</p>';
                    }
                });
        }

        var lastChangelogTrigger = null;
        function openModal(e) {
            if (e) {
                e.preventDefault();
                lastChangelogTrigger = e.target && e.target.closest ? e.target.closest('[data-action="open-changelog"]') : null;
            }
            loadAndShow();
            dialog.showModal();
        }

        function closeModal() {
            dialog.close();
            if (lastChangelogTrigger && typeof lastChangelogTrigger.focus === 'function') {
                lastChangelogTrigger.focus();
            }
        }

        document.querySelectorAll('[data-action="open-changelog"]').forEach(function (a) {
            a.addEventListener('click', openModal);
        });

        dialog.querySelector('.changelog-modal-close').addEventListener('click', closeModal);
        dialog.addEventListener('click', function (e) {
            if (e.target === dialog) closeModal();
        });
        dialog.addEventListener('close', function () {
            if (lastChangelogTrigger && typeof lastChangelogTrigger.focus === 'function') {
                lastChangelogTrigger.focus();
            }
        });
        dialog.addEventListener('cancel', function () { dialog.close(); });
    }

    function initDetailsState() {
        const storageKey = 'ev4-details-open';
        const details = document.querySelectorAll('section details.justification-collapsible, section details[class*="justification"]');
        if (!details.length) return;

        function getDetailsKey(d) {
            if (d.id) return d.id;
            var section = d.closest('section');
            var sectionId = section && section.id ? section.id : 'main';
            var coll = section ? section.querySelectorAll('details.justification-collapsible, details[class*="justification"]') : [];
            var idx = Array.prototype.indexOf.call(coll, d);
            return sectionId + '-' + idx;
        }

        function findDetailsByKey(k) {
            var lastDash = k.lastIndexOf('-');
            if (lastDash === -1) {
                var el = document.getElementById(k);
                return el && el.tagName === 'DETAILS' ? el : null;
            }
            var sectionId = k.slice(0, lastDash);
            var idx = parseInt(k.slice(lastDash + 1), 10);
            if (isNaN(idx)) return null;
            var section = document.getElementById(sectionId) || document.querySelector('main');
            var coll = section ? section.querySelectorAll('details.justification-collapsible, details[class*="justification"]') : [];
            return coll[idx] || null;
        }

        try {
            var stored = sessionStorage.getItem(storageKey);
            var openKeys = stored ? JSON.parse(stored) : [];
            openKeys.forEach(function (k) {
                var el = findDetailsByKey(k);
                if (el) el.open = true;
            });

            var observer = new MutationObserver(function () {
                var keys = Array.from(details)
                    .filter(function (d) { return d.open; })
                    .map(getDetailsKey);
                sessionStorage.setItem(storageKey, JSON.stringify(keys));
            });

            details.forEach(function (d) {
                observer.observe(d, { attributes: true, attributeFilter: ['open'] });
            });
        } catch (e) { /* sessionStorage or JSON not available */ }
    }

    /**
     * Adds header labels to table cells so CSS can stack rows on
     * narrow viewports without losing context.
     */
    function initAdaptiveTables(root) {
        var scope = root || document;
        var tables = scope.querySelectorAll('.responsive-table-wrapper table');
        if (!tables.length) return;

        tables.forEach(function (table) {
            if (table.classList.contains('table-profile-checklist')) return;

            var headerCells = table.querySelectorAll('thead th');
            if (!headerCells.length) return;

            var headers = Array.from(headerCells).map(function (th) {
                return th.textContent.replace(/\s+/g, ' ').trim();
            });
            if (!headers.length) return;

            var bodyRows = table.querySelectorAll('tbody tr');
            if (!bodyRows.length) return;

            table.classList.add('table-mobile-cards');
            var wrapper = table.closest('.responsive-table-wrapper');
            if (wrapper) wrapper.classList.add('responsive-table-wrapper--stacked-cards');

            bodyRows.forEach(function (row) {
                var cells = row.querySelectorAll('th, td');
                var headerIndex = 0;
                cells.forEach(function (cell) {
                    var label = headers[headerIndex] || headers[headers.length - 1] || 'Wert';
                    cell.setAttribute('data-label', label);
                    var span = parseInt(cell.getAttribute('colspan') || '1', 10);
                    headerIndex += Number.isNaN(span) || span < 1 ? 1 : span;
                });
            });
        });
    }

    function buildSearchIndex() {
        var main = document.getElementById('main');
        if (!main) return [];
        var index = [];
        var i, el, id, title, subtitle, excerpt, text;

        var tocEl = document.getElementById('toc');
        if (tocEl) {
            text = tocEl.textContent.replace(/\s+/g, ' ').trim();
            index.push({ id: 'toc', title: 'Inhaltsverzeichnis', subtitle: '', excerpt: text.length > 200 ? text.slice(0, 200) + '…' : text, text: text });
        }

        var profileCheck = document.getElementById('profile-checklist');
        if (profileCheck) {
            var parent = profileCheck.closest('section, [class*="summary"]');
            title = parent && parent.querySelector('h2') ? parent.querySelector('h2').textContent.replace(/\s+/g, ' ').trim() : 'Empfohlene Einstellungen';
            subtitle = profileCheck.textContent.replace(/\s+/g, ' ').trim();
            text = parent ? parent.textContent.replace(/\s+/g, ' ').trim() : subtitle;
            index.push({ id: 'profile-checklist', title: title, subtitle: subtitle, excerpt: text.length > 200 ? text.slice(0, 200) + '…' : text, text: text });
        }

        var sections = main.querySelectorAll('section[id]');
        for (i = 0; i < sections.length; i++) {
            el = sections[i];
            id = el.id;
            if (!id) continue;
            var h2 = el.querySelector('h2');
            title = h2 ? h2.textContent.replace(/\s+/g, ' ').trim() : '';
            var h3 = el.querySelector('h3');
            subtitle = h3 ? h3.textContent.replace(/\s+/g, ' ').trim() : '';
            text = el.textContent.replace(/\s+/g, ' ').trim();
            excerpt = text.length > 200 ? text.slice(0, 200) + '…' : text;
            index.push({ id: id, title: title, subtitle: subtitle, excerpt: excerpt, text: text });
        }
        return index;
    }

    function initSearch() {
        var overlay = document.getElementById('search-overlay');
        var input = document.getElementById('search-input');
        var resultsList = document.getElementById('search-results-list');
        var searchEmpty = document.getElementById('search-empty');
        var searchHint = document.getElementById('search-hint');
        if (!overlay || !input || !resultsList) return;

        var searchIndex = [];
        var selectedIndex = -1;
        var currentResults = [];

        function normalize(s) {
            return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
        }

        function score(entry, q) {
            var t = normalize(entry.title);
            var sub = normalize(entry.subtitle);
            var ex = normalize(entry.excerpt);
            if (!q) return 1;
            if (t === q) return 10;
            if (t.indexOf(q) !== -1) return 5;
            if (sub.indexOf(q) !== -1) return 3;
            if (ex.indexOf(q) !== -1) return 1;
            return 0;
        }

        function runSearch(query) {
            var q = normalize(query);
            searchIndex = searchIndex.length ? searchIndex : buildSearchIndex();
            if (q.length < 2) {
                currentResults = searchIndex.slice(0, 15);
            } else {
                currentResults = searchIndex
                    .map(function (e) { return { entry: e, score: score(e, q) }; })
                    .filter(function (x) { return x.score > 0; })
                    .sort(function (a, b) { return b.score - a.score; })
                    .map(function (x) { return x.entry; });
            }
            selectedIndex = currentResults.length ? 0 : -1;
            renderResults();
        }

        function escapeHtml(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        function highlightSnippet(text, query) {
            var plain = text.slice(0, 120);
            if (!query || query.length < 2) return escapeHtml(plain);
            try {
                var q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                var re = new RegExp('(.{0,50})(' + q + ')(.{0,50})', 'gi');
                var m = re.exec(text);
                if (!m) return escapeHtml(plain);
                return escapeHtml(m[1]) + '<mark class="search-highlight">' + escapeHtml(m[2]) + '</mark>' + escapeHtml(m[3]);
            } catch (err) {
                return escapeHtml(plain);
            }
        }

        function renderResults() {
            resultsList.innerHTML = '';
            searchEmpty.hidden = currentResults.length > 0;
            searchHint.hidden = currentResults.length === 0 && input.value.trim().length >= 2;

            currentResults.forEach(function (entry, idx) {
                var li = document.createElement('li');
                li.id = 'search-result-' + idx;
                li.setAttribute('role', 'option');
                li.setAttribute('aria-selected', idx === selectedIndex ? 'true' : 'false');
                li.className = 'search-result-item' + (idx === selectedIndex ? ' is-selected' : '');
                var link = document.createElement('a');
                link.href = '#' + entry.id;
                link.className = 'search-result-link';
                link.innerHTML = '<span class="search-result-title">' + escapeHtml(entry.subtitle || entry.title) + '</span><span class="search-result-snippet">' + highlightSnippet(entry.excerpt, normalize(input.value)) + '</span>';
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    goToResult(entry.id);
                });
                li.appendChild(link);
                resultsList.appendChild(li);
            });

            resultsList.setAttribute('aria-expanded', currentResults.length > 0);
        }

        function goToResult(id) {
            var target = document.getElementById(id);
            if (target) {
                closeSearch();
                window.requestAnimationFrame(function () {
                    scrollToAnchor(id);
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                });
            } else {
                closeSearch();
            }
        }

        function openSearch() {
            overlay.setAttribute('aria-hidden', 'false');
            overlay.classList.add('is-open');
            document.body.classList.add('search-open');
            input.value = '';
            runSearch('');
            input.focus();
            selectedIndex = 0;
            renderResults();
        }

        function closeSearch() {
            overlay.setAttribute('aria-hidden', 'true');
            overlay.classList.remove('is-open');
            document.body.classList.remove('search-open');
            var trigger = document.querySelector('[data-action="open-search"]');
            if (trigger) trigger.focus();
        }

        function moveSelection(delta) {
            if (currentResults.length === 0) return;
            selectedIndex = selectedIndex + delta;
            if (selectedIndex < 0) selectedIndex = currentResults.length - 1;
            if (selectedIndex >= currentResults.length) selectedIndex = 0;
            renderResults();
            var sel = document.getElementById('search-result-' + selectedIndex);
            if (sel) sel.querySelector('a').focus();
        }

        input.addEventListener('input', throttle(function () {
            runSearch(input.value);
        }, 150));

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeSearch();
                return;
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                moveSelection(1);
                return;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                moveSelection(-1);
                return;
            }
            if (e.key === 'Enter' && currentResults.length > 0 && selectedIndex >= 0 && currentResults[selectedIndex]) {
                e.preventDefault();
                goToResult(currentResults[selectedIndex].id);
            }
        });

        overlay.querySelectorAll('[data-action="close-search"]').forEach(function (btn) {
            btn.addEventListener('click', closeSearch);
        });

        document.querySelectorAll('[data-action="open-search"]').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                openSearch();
            });
        });

        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (overlay.getAttribute('aria-hidden') === 'true') {
                    openSearch();
                } else {
                    closeSearch();
                }
            }
        });

        overlay.addEventListener('keydown', function (e) {
            if (e.key !== 'Tab' || overlay.getAttribute('aria-hidden') === 'true') return;
            var focusables = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusables.length === 0) return;
            var first = focusables[0];
            var last = focusables[focusables.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
    }

    function initNavMenu() {
        const nav = document.querySelector('nav');
        const trigger = document.querySelector('.nav-menu-trigger');
        const menu = document.getElementById('nav-menu');
        if (!nav || !trigger || !menu) return;

        var icon = trigger.querySelector('.material-symbols-outlined');
        var firstFocusable = menu.querySelector('a[href], button');
        function openMenu() {
            nav.classList.add('nav-menu-open');
            document.body.classList.add('nav-menu-open');
            menu.setAttribute('aria-hidden', 'false');
            trigger.setAttribute('aria-expanded', 'true');
            trigger.setAttribute('aria-controls', 'nav-menu');
            trigger.setAttribute('aria-label', 'Menü schließen');
            if (icon) icon.textContent = 'close';
            if (firstFocusable) setTimeout(function () { firstFocusable.focus(); }, 50);
        }
        function closeMenu() {
            nav.classList.remove('nav-menu-open');
            document.body.classList.remove('nav-menu-open');
            menu.setAttribute('aria-hidden', 'true');
            trigger.setAttribute('aria-expanded', 'false');
            trigger.setAttribute('aria-controls', 'nav-menu');
            trigger.setAttribute('aria-label', 'Menü öffnen');
            if (icon) icon.textContent = 'menu';
        }

        trigger.addEventListener('click', function () {
            if (nav.classList.contains('nav-menu-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('nav-menu-open')) {
                closeMenu();
                trigger.focus();
            }
        });

        document.addEventListener('click', function (e) {
            if (nav.classList.contains('nav-menu-open') && !nav.contains(e.target)) {
                closeMenu();
                trigger.focus();
            }
        });

        var backdrop = document.querySelector('.nav-menu-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', function () {
                if (nav.classList.contains('nav-menu-open')) {
                    closeMenu();
                    trigger.focus();
                }
            });
        }

        /** Handles nav hash links: close menu, wait for transition, then scroll. */
        var MENU_TRANSITION_MS = 300;
        function handleNavHashClick(e) {
            var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
            if (!a || !nav.contains(a)) return;
            var href = (a.getAttribute('href') || '').trim();
            if (!href || href.length <= 1) { closeMenu(); return; }
            var id = href.slice(1);
            if (document.getElementById(id)) {
                e.preventDefault();
                var wasMenuOpen = nav.classList.contains('nav-menu-open');
                closeMenu();
                setTimeout(function () { scrollToAnchor(id); }, wasMenuOpen ? MENU_TRANSITION_MS : 0);
            } else {
                closeMenu();
            }
        }
        nav.addEventListener('click', handleNavHashClick, true);

        var mq = window.matchMedia('(min-width: 769px)');
        function onViewportChange(ev) {
            if (ev.matches && nav.classList.contains('nav-menu-open')) {
                closeMenu();
            }
        }
        mq.addEventListener('change', onViewportChange);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }

    function initLightbox() {
        var links = document.querySelectorAll('.galerie-link[data-lightbox="galerie"]');
        if (!links.length) return;
        var overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Bild vergrößert anzeigen');
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML =
            '<button type="button" class="lightbox-close" aria-label="Lightbox schließen"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>' +
            '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Vorheriges Bild"><span class="material-symbols-outlined" aria-hidden="true">chevron_left</span></button>' +
            '<button type="button" class="lightbox-nav lightbox-next" aria-label="Nächstes Bild"><span class="material-symbols-outlined" aria-hidden="true">chevron_right</span></button>' +
            '<div class="lightbox-inner">' +
            '<img src="" alt="" class="lightbox-img">' +
            '<p class="lightbox-caption" id="lightbox-caption"></p>' +
            '<p class="lightbox-counter" id="lightbox-counter" aria-live="polite"></p>' +
            '</div>';
        document.body.appendChild(overlay);
        var img = overlay.querySelector('.lightbox-img');
        var closeBtn = overlay.querySelector('.lightbox-close');
        var prevBtn = overlay.querySelector('.lightbox-prev');
        var nextBtn = overlay.querySelector('.lightbox-next');
        var captionEl = overlay.querySelector('#lightbox-caption');
        var counterEl = overlay.querySelector('#lightbox-counter');
        var currentIndex = 0;
        var lastFocused = null;

        var placeholderSrc = 'img/ev4/placeholder.svg';
        function showSlide(index) {
            currentIndex = (index + links.length) % links.length;
            var a = links[currentIndex];
            var href = a.getAttribute('href');
            var title = a.getAttribute('data-title') || '';
            img.onerror = function() {
                img.onerror = null;
                img.src = placeholderSrc;
            };
            img.setAttribute('src', href);
            img.setAttribute('alt', title);
            captionEl.textContent = title;
            counterEl.textContent = (currentIndex + 1) + ' / ' + links.length;
            prevBtn.style.visibility = links.length > 1 ? 'visible' : 'hidden';
            nextBtn.style.visibility = links.length > 1 ? 'visible' : 'hidden';
        }

        function open(e) {
            if (e) e.preventDefault();
            var idx = 0;
            if (e && e.currentTarget) {
                for (var i = 0; i < links.length; i++) { if (links[i] === e.currentTarget) { idx = i; break; } }
                lastFocused = e.currentTarget;
            } else {
                lastFocused = links[currentIndex];
            }
            currentIndex = idx;
            showSlide(currentIndex);
            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('lightbox-open');
            document.documentElement.style.overflow = 'hidden';
            closeBtn.focus();
        }

        function close() {
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('lightbox-open');
            document.documentElement.style.overflow = '';
            img.removeAttribute('src');
            captionEl.textContent = '';
            counterEl.textContent = '';
            if (lastFocused && lastFocused.focus) lastFocused.focus();
        }

        function goPrev() {
            showSlide(currentIndex - 1);
            closeBtn.focus();
        }
        function goNext() {
            showSlide(currentIndex + 1);
            closeBtn.focus();
        }

        links.forEach(function (a) { a.addEventListener('click', open); });
        closeBtn.addEventListener('click', close);
        prevBtn.addEventListener('click', function (e) { e.stopPropagation(); goPrev(); });
        nextBtn.addEventListener('click', function (e) { e.stopPropagation(); goNext(); });
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) close();
        });
        overlay.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { close(); return; }
            if (e.key === 'ArrowLeft') { goPrev(); e.preventDefault(); return; }
            if (e.key === 'ArrowRight') { goNext(); e.preventDefault(); return; }
            var focusables = overlay.querySelectorAll('button');
            if (e.key !== 'Tab' || focusables.length === 0) return;
            var first = focusables[0];
            var last = focusables[focusables.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { last.focus(); e.preventDefault(); }
            } else {
                if (document.activeElement === last) { first.focus(); e.preventDefault(); }
            }
        });
    }

    function initFooterPlaceholderLinks() {
        document.querySelectorAll('.footer-placeholder-link').forEach(function (a) {
            a.addEventListener('click', function (e) { e.preventDefault(); });
        });
    }

    function initChecklist() {
        var table = document.querySelector('.table-profile-checklist');
        var actions = document.getElementById('checklist-actions');
        var progressEl = document.getElementById('checklist-progress');
        var resetBtn = document.getElementById('checklist-reset');
        var printBtn = document.getElementById('checklist-print');
        var STORAGE_KEY = 'ev4-checklist-done';

        if (!table || !actions) return;

        function loadState() {
            try {
                var s = localStorage.getItem(STORAGE_KEY);
                return s ? JSON.parse(s) : {};
            } catch (e) { return {}; }
        }
        function saveState(state) {
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
        }

        function updateProgress() {
            var rows = table.querySelectorAll('tbody tr[data-checklist-id]');
            var done = 0;
            rows.forEach(function (r) {
                var cb = r.querySelector('.checklist-cb');
                if (cb && cb.checked) done++;
            });
            progressEl.textContent = done + ' / ' + rows.length + ' erledigt';
            actions.hidden = false;
        }

        var state = loadState();
        table.querySelectorAll('tbody tr[data-checklist-id]').forEach(function (tr) {
            var id = tr.getAttribute('data-checklist-id');
            if (!id) return;
            var firstTd = tr.querySelector('td:first-child');
            if (!firstTd) return;
            var cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'checklist-cb';
            cb.setAttribute('aria-label', 'Einstellung ' + id + ' erledigt');
            cb.checked = !!state[id];
            if (cb.checked) tr.classList.add('checklist-done');
            cb.addEventListener('change', function () {
                state[id] = cb.checked;
                saveState(state);
                tr.classList.toggle('checklist-done', cb.checked);
                updateProgress();
            });
            firstTd.insertBefore(cb, firstTd.firstChild);
        });
        updateProgress();

        if (resetBtn) {
            resetBtn.addEventListener('click', function () {
                state = {};
                saveState(state);
                table.querySelectorAll('.checklist-cb').forEach(function (cb) {
                    cb.checked = false;
                });
                table.querySelectorAll('tr.checklist-done').forEach(function (r) { r.classList.remove('checklist-done'); });
                updateProgress();
            });
        }
        if (printBtn) {
            printBtn.addEventListener('click', function (e) {
                e.preventDefault();
                window.print();
            });
        }
    }

    function initServiceWorker() {
        if (!('serviceWorker' in navigator)) return;
        if (location.protocol !== 'https:' && !location.hostname.match(/^localhost$/)) return;
        navigator.serviceWorker.register('./sw.js').catch(function () {});
    }

    function initAnchorLinks() {
        var navEl = document.querySelector('nav');
        document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
            if (!a) return;
            var href = (a.getAttribute('href') || '').trim();
            if (!href || href.length <= 1) return;
            var id = href.slice(1);
            if (!document.getElementById(id)) return;
            if (navEl && navEl.contains(a)) return;
            e.preventDefault();
            scrollToAnchor(id);
        }, true);
    }

    function run() {
        initPageNavClone();
        initAdaptiveTables();
        initScrollSpy();
        initBackToTop();
        initScrollReveal();
        initChangelogModal();
        initDetailsState();
        initNavMenu();
        initAnchorLinks();
        initSearch();
        initLightbox();
        initFooterPlaceholderLinks();
        initChecklist();
        initServiceWorker();
    }
})();
