$(document).ready(function () {
  slideMenu()
  reviewsCarousel()
  imgSlides()
  photographyParams()
  dropdownMenu()
  linkHover()
});

// slide in menu ------------------------------------------------------------------------------------------------------
function slideMenu() {
  const menuOpen = $('.menu-open');
  const menuClose = $('.menu-close');
  const menu = $('.slide-in-menu');

  $(menuOpen).on('click', function () {
    $(menu).removeClass('closed');
  })

  $(menuClose).on('click', function () {
    $(menu).addClass('closed');
  })
}

// reviews carousel ------------------------------------------------------------------------------------------------------

function reviewsCarousel() {
  if ($('.reviews-wrapper').length) {
    $('.reviews-wrapper .container').slick({
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
          breakpoint: 14439,
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
}

// image slides ------------------------------------------------------------------------------------------------------

function imgSlides() {
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
}

// photography page content swap --------------------------------------------------------------------------------------------
function photographyParams() {
  url = new URL(window.location.href);

  if (url.searchParams.get('page')) {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    const image = $('.photography-section img')

    $(image).hide().filter("[data-page=" + pageParam + "]").show();
    $('.photo-category').html(pageParam);
  }
}

// dropdown menu --------------------------------------------------------------------------------------------
function dropdownMenu() {
  $(".dropdown-menu").click(function () {
    $(this).find(".dropdown-body").slideToggle("fast");
    $(this).toggleClass('open');
  });
  // });
  $(document).on("click", function (event) {
    var $trigger = $(".dropdown-menu");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $(".dropdown-body").slideUp("fast");
    }
  });
}


// rose menu link hover --------------------------------------------------------------------------------------------
function linkHover() {
  if ($('.rose-menu-wrapper').length) {
    $(".rose-menu-wrapper a").hover(function () {
      $(".rose-menu-wrapper a").animate({ 'opacity': '0.3' }, 50);
      $(this).animate({ 'opacity': '1' }, 50);
    },
      function () {
        $('.rose-menu-wrapper a').animate({ 'opacity': '1' }, 50);
      });
  }
}

