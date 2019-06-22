var revItem = document.querySelectorAll('.review-autors__list-item');
for (let i = 0; i < comItem.length; i++) {
    revItem[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    if (!this.classList.contains('review-autors__list-item--active')) {
    if(document.querySelector('.review-autors__list-item--active')){
            document.querySelector('.review-autors__list-item--active').classList.remove('review-autors__list-item--active');
            this.classList.add('review-autors__list-item--active');
        }else {
            this.classList.add('review-autors__list-item--active');
        }
    }
  });
}
