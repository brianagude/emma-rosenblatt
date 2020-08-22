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

  if ($('.reviews-wrapper').length) {
    console.log('yes')

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
  }
});




$(document).ready(function () {
  if ($('.slides').length) {
    // pick all of the images and layer them based on the z-index

    const slideArea = document.querySelector("div.slides")
    const images = slideArea.querySelectorAll("img")

    // keep track of 1. which slide are we on 2. z-index

    let currentSlide = 0
    let z = 1

    // when I click slideArea, change the slide based on the z-index
    slideArea.addEventListener("click", function () {
      currentSlide = currentSlide + 1

      if (currentSlide > images.length - 1) {
        currentSlide = 0
      }

      z = z + 1

      //   remove the animation from the style for every image
      images.forEach(image => {
        image.style.animation = ""
      })

      //   pick the right image
      images[currentSlide].style.zIndex = z
      images[currentSlide].style.animation = "fade 0.5s"
    })

    slideArea.addEventListener("mouseover", function () {
      images.forEach(image => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`
      })
    })

    // when I move my mouse away, put the images back
    slideArea.addEventListener(`mouseout`, function () {
      images.forEach(image => {
        image.style.transform = ``
      })
    })
  }
});