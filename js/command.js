var comItem = document.querySelectorAll('.command__item');
for (let i = 0; i < comItem.length; i++) {
    comItem[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    if (this.classList.contains('command__item--active')) {        
        this.classList.remove('command__item--active');
        } else if(document.querySelector('.command__item--active')){
            document.querySelector('.command__item--active').classList.remove('command__item--active');
            this.classList.add('command__item--active');
        }else {
            this.classList.add('command__item--active');
        }
  });
}