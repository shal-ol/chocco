


if (window.screen.width > 768){
    const sections = $(".section");
    const display = $(".maincontent");
    let inscroll = false;
    
    
    const switchActiveClassSideMenu = menuItemIndex =>{
        $('.sidebar-nav__item').eq(menuItemIndex).addClass('nav__item--active').siblings().removeClass('nav__item--active')
    }
    
    const performTransition = sectionEq => {
    
        if (inscroll) return;
    
        inscroll = true;
    const position = `${sectionEq * -100}%`;
    
    sections.eq(sectionEq).addClass("show").siblings().removeClass("show");
    display.css({
        transform: `translateY(${position})`
    
    });
    setTimeout (() =>{
        switchActiveClassSideMenu(sectionEq);
        inscroll = false
    }, 1300);
    };
    
    const scrollToSection = direction =>{
        const shownSection = sections.filter(".show");
        const nextSection = shownSection.next();
        const prevSection = shownSection.prev();
    
        if (direction === "next" && nextSection.length){
            performTransition(nextSection.index())
        }
    
        if (direction === "prev" && prevSection.length){
            performTransition(prevSection.index())
        }
    }
    
    $(".wrapper").on("wheel", e =>{
        const deltaY = e.originalEvent.deltaY;
      
        if (deltaY > 0) {
            scrollToSection("next");
        }
    
        if (deltaY < 0){
            scrollToSection("prev");
        }
    })
    
    
    
    $(document).on("keydown", e =>{
        switch(e.keyCode){
            case 40:
                scrollToSection("next");
                break;
            case 38:
                scrollToSection("prev");    
                break;  
        }
    })
    
    $("[scroll-to]").on("click", e =>{
        e.preventDefault();
    
        const target = $(e.currentTarget).attr('scroll-to');
        performTransition(target);
    })
    } 
    else{
        $(document).ready(function(){
         $(".nav__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
				const id = $(this).attr('href');
				console.log($(id).offset().top);
        //узнаем высоту от начала страницы до блока на который ссылается якорь
				dest = $(id).offset().top;
				console.log(dest);
        //анимируем переход на расстояние - top за 1500 мс
        $('.wrapper').animate({scrollTop: dest}, 1500);
        });
      });
    }