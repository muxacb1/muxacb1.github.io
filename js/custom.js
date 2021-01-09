var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  autoHeight: true,
  slidesPerView:3,
  spaceBetween:0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    /*
    type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>'
    }
    */
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})