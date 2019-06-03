var item = document.querySelectorAll('.menu__item');
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    if (this.classList.contains('menu__item--active')) {        
        this.classList.remove('menu__item--active');
        } else if(document.querySelector('.menu__item--active')){
            document.querySelector('.menu__item--active').classList.remove('menu__item--active');
            this.classList.add('menu__item--active');
        }else {
            this.classList.add('menu__item--active');
        }
  });
}