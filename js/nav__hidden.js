const nav = document.querySelector('#nav');
const nav__close = document.querySelector('.nav__close');
const nav__open = document.querySelector('.nav__open');

nav__open.addEventListener("click", function(){
nav.style.display = 'flex';
nav__open.style.display = 'none';
nav__close.style.display = 'block';
});


nav__close.addEventListener("click", function(){
nav.style.display = 'none';
nav__close.style.display = 'none';
nav__open.style.display = 'block';
});