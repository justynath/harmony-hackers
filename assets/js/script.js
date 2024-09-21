document.addEventListener('DOMContentLoaded', () => {
  const transition1_el = document.querySelector('.transition-1');
  const transition2_el = document.querySelector('.transition-2');
  setTimeout(() => {
    transition1_el.classList.remove('is-active');
    transition2_el.classList.remove('is-active');
  }, 3000);
});

