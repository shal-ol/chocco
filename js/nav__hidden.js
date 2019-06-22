const nav = document.querySelector('#nav');
const nav__close = document.querySelector('.nav__close');
const nav__open = document.querySelector('.nav__open');
const nav__item = document.querySelectorAll('.nav__item');

if (window.screen.width > 768){
    nav__open.style.display = 'none';
}else{
    
nav__open.addEventListener("click", function(e){
nav.style.display = 'flex';
nav__open.style.display = 'none';
nav__close.style.display = 'block';
});


nav__close.addEventListener("click", function(e){
    e.preventDefault();
nav.style.display = 'none';
nav__close.style.display = 'none';
nav__open.style.display = 'block';
});

for (let i=0; i<nav__item.length;i++){
    nav__item[i].addEventListener("click", function(e){
        e.preventDefault();
    nav.style.display = 'none';
    nav__close.style.display = 'none';
    nav__open.style.display = 'block';
    });
}
}