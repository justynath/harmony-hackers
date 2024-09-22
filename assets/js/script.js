document.addEventListener('DOMContentLoaded', () => {
  const transition1_el = document.querySelector('.transition-1');
  const transition2_el = document.querySelector('.transition-2');
  setTimeout(() => {
    transition1_el.classList.remove('is-active');
    transition2_el.classList.remove('is-active');
  }, 3000);

  const toggle = document.getElementById('check');
  const button = document.querySelector('.fa-play, .fa-pause'); // Select the button with either class
  let isSecondClick = false;

  toggle.addEventListener('change', () => {
    if (isSecondClick) {
      button.classList.remove("fa-pause");
      button.classList.add("fa-play");
      isSecondClick = false;
    } else {
      button.classList.remove("fa-play");
      button.classList.add("fa-pause");
      isSecondClick = true;
    }
  });
});
