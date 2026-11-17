(() => {
  const ocean = document.querySelector('.jelly-ocean');
  if (!ocean) return;
  let visible = false;
  const sync = () => ocean.classList.toggle('is-paused', !visible || document.hidden);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(ocean);
  document.addEventListener('visibilitychange', sync);
  sync();
})();
