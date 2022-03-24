const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const bgHamb = document.getElementById('bg-hamb')

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
  bgHamb.classList.toggle('bg-nav');
});

