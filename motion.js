/* Native, dependency-free motion. No wheel interception or artificial scrolling. */
(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  const heading = document.querySelector('#hero-title');
  if (!hero || !heading) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const first = heading.querySelector('span:not(.sr-only)');
  const name = first?.textContent.trim() || 'SIYA WANG';
  const track = document.createElement('span');
  track.className = 'marquee-track';
  track.setAttribute('aria-hidden', 'true');
  const label = document.createElement('span');
  label.className = 'sr-only';
  label.textContent = 'Siya Wang / ' + name;
  const units = [];
  for (let i = 0; i < 3; i++) {
    const unit = document.createElement('span');
    unit.className = 'marquee-unit';
    const text = document.createElement('span');
    text.className = 'marquee-name';
    text.textContent = name;
    const dash = document.createElement('span');
    dash.className = 'marquee-divider';
    dash.textContent = '—';
    unit.append(text, dash);
    track.append(unit);
    units.push(unit);
  }
  heading.replaceChildren(track, label);
  heading.classList.add('motion-marquee');

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'marquee-toggle';
  toggle.setAttribute('aria-label', 'Pause name animation');
  toggle.setAttribute('aria-pressed', 'false');
  const pauseIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"><path d="M5 3v10M11 3v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const playIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"><path d="m5 3 8 5-8 5V3Z" fill="currentColor"/></svg>';
  toggle.innerHTML = pauseIcon;
  hero.append(toggle);

  let paused = false;
  let heroVisible = true;
  let offset = 0;
  let unitWidth = 0;
  let speed = 0;
  let direction = -1;
  let scrollVelocity = 0;
  let lastScroll = scrollY;
  let lastScrollTime = performance.now();
  let lastTime = 0;
  let frame = 0;
  let settlingUntil = 0;
  const portraitWrap = hero.querySelector('.hero-image-wrap');
  const motionNodes = [];
  let pointerX = 0, pointerY = 0, portraitX = 0, portraitY = 0;
  let activePreview = null, previewTargetX = 0, previewTargetY = 0, previewX = 0, previewY = 0;

  function requestFrame() {
    if (!frame && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
  }
  function settleFor(ms = 1100) { settlingUntil = performance.now() + ms; requestFrame(); }
  function measure() {
    const previous = unitWidth;
    unitWidth = units[0].getBoundingClientRect().width;
    if (previous && unitWidth) offset = offset / previous * unitWidth;
    settleFor();
  }
  const resize = new ResizeObserver(measure);
  resize.observe(heading);
  document.fonts?.ready.then(measure);
  measure();

  const visibleObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.target === hero) heroVisible = entry.isIntersecting;
    if (heroVisible) { lastTime = 0; requestFrame(); }
  }, { rootMargin: '120px 0px' });
  visibleObserver.observe(hero);

  toggle.addEventListener('click', () => {
    paused = !paused;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Resume name animation' : 'Pause name animation');
    toggle.innerHTML = paused ? playIcon : pauseIcon;
    if (!paused) { lastTime = 0; requestFrame(); }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else { lastTime = 0; requestFrame(); }
  });
  addEventListener('scroll', () => {
    const now = performance.now();
    const dy = scrollY - lastScroll;
    if (Math.abs(dy) > 1) direction = dy > 0 ? -1 : 1;
    scrollVelocity = clamp(dy / Math.max(12, now - lastScrollTime) * 1000, -2400, 2400);
    lastScrollTime = now;
    lastScroll = scrollY;
    settleFor(700);
  }, { passive: true });

  // Every image stays contained in its original frame; only the wrapper moves.
  document.querySelector('#project-grid')?.addEventListener('pointermove', event => {
    if (!pointer.matches || reduced.matches) return;
    const image = event.target.closest('.project-image');
    if (image?.closest('.uncropped-work')) {
      if (activePreview) activePreview.style.removeProperty('translate');
      activePreview = null;
      previewTargetX = previewTargetY = previewX = previewY = 0;
      return;
    }
    const preview = image?.querySelector('.project-preview');
    if (!preview) return;
    if (activePreview && activePreview !== preview) activePreview.style.removeProperty('translate');
    activePreview = preview;
    const bounds = preview.parentElement.getBoundingClientRect();
    previewTargetX = (event.clientX - bounds.left - bounds.width / 2) / bounds.width * 9;
    previewTargetY = (event.clientY - bounds.top - bounds.height / 2) / bounds.height * 9;
    settleFor();
  });
  document.querySelector('#project-grid')?.addEventListener('pointerleave', () => {
    previewTargetX = previewTargetY = 0;
    settleFor();
  });
  hero.addEventListener('pointermove', event => {
    if (!pointer.matches || reduced.matches) return;
    const bounds = hero.getBoundingClientRect();
    pointerX = (event.clientX / bounds.width - .5) * 10;
    pointerY = ((event.clientY - bounds.top) / bounds.height - .5) * 7;
    requestFrame();
  });
  hero.addEventListener('pointerleave', () => { pointerX = pointerY = 0; settleFor(); });

  // Spring return gives circular links a soft, physical feel without layout shifts.
  document.querySelectorAll('.magnetic').forEach(element => {
    const state = { element, x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 };
    motionNodes.push(state);
    element.addEventListener('pointermove', event => {
      if (!pointer.matches || reduced.matches) return;
      const bounds = element.getBoundingClientRect();
      state.tx = clamp((event.clientX - bounds.left - bounds.width / 2) * .24, -19, 19);
      state.ty = clamp((event.clientY - bounds.top - bounds.height / 2) * .24, -19, 19);
      settleFor();
    });
    const reset = () => { state.tx = state.ty = 0; settleFor(); };
    element.addEventListener('pointerleave', reset);
    element.addEventListener('blur', reset);
  });

  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('motion-visible');
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: .06, rootMargin: '0px 0px -24px 0px' });
  const revealTargets = document.querySelectorAll('.project-card,.strength-card,.award-list>button,.operation-stats>div,.experience-list>details,.contact-title-row,.education');
  revealTargets.forEach((element, index) => {
    element.classList.add('motion-reveal');
    element.style.setProperty('--reveal-delay', (innerWidth > 760 ? index % 2 * 85 : 0) + 'ms');
    revealObserver.observe(element);
  });

  function updatePreference() {
    document.documentElement.classList.toggle('motion-ready', !reduced.matches);
    if (reduced.matches) {
      cancelAnimationFrame(frame);
      frame = 0;
      track.style.removeProperty('transform');
      portraitWrap?.style.removeProperty('transform');
      activePreview?.style.removeProperty('translate');
      motionNodes.forEach(state => { state.element.style.removeProperty('transform'); state.x = state.y = state.vx = state.vy = state.tx = state.ty = 0; });
    } else { lastTime = 0; measure(); requestFrame(); }
  }
  reduced.addEventListener('change', updatePreference);

  function tick(now) {
    frame = 0;
    if (document.hidden || reduced.matches) return;
    const elapsed = lastTime ? Math.min(40, now - lastTime) : 16.67;
    lastTime = now;
    const mix = 1 - Math.exp(-elapsed / 160);
    const scrolling = now - lastScrollTime < 130;
    const boost = scrolling ? Math.abs(scrollVelocity) * .09 : 0;
    const base = clamp(innerWidth * .07, 42, 110);
    const targetSpeed = direction * (base + Math.min(boost, 200));
    speed += (targetSpeed - speed) * mix;
    if (heroVisible && !paused && unitWidth) {
      offset += speed * elapsed / 1000;
      offset = ((offset % unitWidth) - unitWidth) % unitWidth;
      track.style.transform = 'translate3d(' + offset.toFixed(3) + 'px,0,0)';
    }
    if (pointer.matches) {
      portraitX += (pointerX - portraitX) * mix;
      const targetY = pointerY + clamp(scrollY * .035, 0, 22);
      portraitY += (targetY - portraitY) * mix;
      if (portraitWrap && heroVisible) portraitWrap.style.transform = 'translate3d(' + portraitX.toFixed(2) + 'px,' + portraitY.toFixed(2) + 'px,0)';
      if (activePreview) {
        previewX += (previewTargetX - previewX) * mix;
        previewY += (previewTargetY - previewY) * mix;
        activePreview.style.translate = previewX.toFixed(2) + 'px ' + previewY.toFixed(2) + 'px';
      }
      const step = elapsed / 16.67;
      motionNodes.forEach(state => {
        const damping = Math.pow(.68, step);
        state.vx = (state.vx + (state.tx - state.x) * .13 * step) * damping;
        state.vy = (state.vy + (state.ty - state.y) * .13 * step) * damping;
        state.x += state.vx * step;
        state.y += state.vy * step;
        state.element.style.transform = 'translate3d(' + state.x.toFixed(2) + 'px,' + state.y.toFixed(2) + 'px,0)';
      });
    }
    if ((heroVisible && !paused) || now < settlingUntil) requestFrame();
    else lastTime = 0;
  }
  updatePreference();
})();
