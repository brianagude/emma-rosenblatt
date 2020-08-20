$(document).ready(function () {

  // slide in menu
  const menuOpen = $('.menu-open');
  const menuClose = $('.menu-close');
  const menu = $('.slide-in-menu');

  $(menuOpen).on('click', function () {
    $(menu).removeClass('closed');
  })

  $(menuClose).on('click', function () {
    $(menu).addClass('closed');
  })
});

$(document).ready(function () {
  // $('.reviews-wrapper').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // });

  $('.reviews-wrapper').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});

