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