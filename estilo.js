document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });

  els.forEach((el) => io.observe(el));
  window.addEventListener('load', () => {
  if (!window.location.hash) window.scrollTo(0, 0);
});

});

