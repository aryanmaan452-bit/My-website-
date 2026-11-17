(() => {
  const footer = document.querySelector('.site-footer');
  const mascot = footer?.querySelector('.footer-mascot');
  if (!mascot) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let visible = false, frame = 0, x = 0, y = 0;
  const reset = () => { cancelAnimationFrame(frame); frame = 0; mascot.style.removeProperty('--look-x'); mascot.style.removeProperty('--look-y'); };
  const update = () => {
    frame = 0;
    if (!visible || document.hidden || reduced.matches || !fine.matches) return;
    const box = mascot.getBoundingClientRect();
    const dx = (x - box.left - box.width / 2) / Math.max(box.width / 2, 1);
    const dy = (y - box.top - box.height / 2) / Math.max(box.height / 2, 1);
    mascot.style.setProperty('--look-x', Math.max(-9, Math.min(9, dx * 9)) + 'px');
    mascot.style.setProperty('--look-y', Math.max(-7, Math.min(7, dy * 7)) + 'px');
  };
  document.addEventListener('pointermove', event => {
    if (!visible || reduced.matches || !fine.matches || document.hidden) return;
    x = event.clientX; y = event.clientY;
    if (!frame) frame = requestAnimationFrame(update);
  }, {passive: true});
  document.documentElement.addEventListener('pointerleave', reset);
  const sync = () => { footer.classList.toggle('mascot-paused', !visible || document.hidden || reduced.matches); reset(); };
  const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
  observer.observe(mascot);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  fine.addEventListener('change', reset);
  sync();
})();
