document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  let isSecondClick = false;

  toggler.addEventListener('click', function() {
    if (isSecondClick) {
      setTimeout(() => {
        document.body.classList.toggle('navbar-toggled');
        isSecondClick = false;
      }, 500);
    } else {
      document.body.classList.toggle('navbar-toggled');
      isSecondClick = true; 
    }
  });

  const transition1_el = document.querySelector('.transition-1');
  const transition2_el = document.querySelector('.transition-2');
  setTimeout(() => {
    transition1_el.classList.remove('is-active');
    transition2_el.classList.remove('is-active');
  }, 3000);
});

