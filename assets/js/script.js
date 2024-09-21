document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  let isSecondClick = false;
  const togglerIcon = document.getElementById('play-icon'); 
  toggler.addEventListener('click', function() {
    if (isSecondClick) {
      togglerIcon.classList.remove('fa-stop');
      togglerIcon.classList.add('fa-play'); 
      setTimeout(() => {
        document.body.classList.toggle('navbar-toggled');
        isSecondClick = false;
      }, 500);
    } else {
      document.body.classList.toggle('navbar-toggled');
      isSecondClick = true;
      togglerIcon.classList.remove('fa-play');
      togglerIcon.classList.add('fa-stop'); 
    }
  });

  const transition1_el = document.querySelector('.transition-1');
  const transition2_el = document.querySelector('.transition-2');
  setTimeout(() => {
    transition1_el.classList.remove('is-active');
    transition2_el.classList.remove('is-active');
  }, 3000);
});

