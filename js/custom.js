var mySwiper = new Swiper('.swiper-container', {
    autoHeight: true,
    spaceBetween: 41,
    pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
              '/' +
              '<span class="' + totalClass + '"></span>';
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
    },

    // when window width is >= 480px
    620: {
      slidesPerView: 2,
    },
    // when window width is >= 869
    869: {
      slidesPerView: 3,
    }
  }

})

//---------additional

class Tabs{
  constructor(){
    this.tabList = document.querySelectorAll('.pageNav__tabItem');
    this.contentList = document.querySelectorAll('.pageNav__contentItem');
    let nav = document.querySelector('.pageNav');
    
    nav.addEventListener('click', e => this.show(e));
    
    this.setIndex();
  }
  
  show(e){
    let t = e.target;
    if (!t.classList.contains('pageNav__tabItem')) return;
    this.removePrev();
    
    let index = t.getAttribute('data-index');
    let content = document.querySelector('.pageNav__contentItem[data-index="'+index+'"]');
    
    t.classList.add('pageNav__tabItem--active');
    content.classList.add('pageNav__contentItem--active');
  }
  
  setIndex(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].setAttribute('data-index', i);
      this.contentList[i].setAttribute('data-index', i);
    }
  }
  
  removePrev(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].classList.remove('pageNav__tabItem--active');
      this.contentList[i].classList.remove('pageNav__contentItem--active');
    }
  }
  
}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new Tabs();
})