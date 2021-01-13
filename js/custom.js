//Tippy
tippy ('.tippy', {
  content:"Наша компания обладает современными технологиями, которые позволяют купить/продать недвижимость в любой точке мира в кратчайшие сроки.",
});

//Swiper
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


//additional

$('.js-tab-trigger').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger.active').removeClass('active');
   $(this).addClass('active');
   
   $('.js-tab-content.active').removeClass('active');
   content.addClass('active');
});