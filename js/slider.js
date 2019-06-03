
var slides = document.querySelectorAll('.slider-item');
var right = document.querySelector('.slider__arrow-right');
var left = document.querySelector('.slider__arrow-left');
slideIndex = 1;

showSlides(slideIndex);

function showSlides (n){
    if (n<1){
        slideIndex=slides.length;}
        else if (n>slides.length){
            slideIndex = 1;
        }
        for (let i=0; i<slides.length; i++){
            slides[i].style.display = 'none';
        }
        slides[slideIndex-1].style.display = 'flex';
    }

function plusSlides(n){
    showSlides(slideIndex+=n);
}
right.onclick = function (){
    plusSlides(1);
}
left.onclick = function (){
    plusSlides(-1);
}



