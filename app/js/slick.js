// $(document).ready(function () {
//   $('.quote-block').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
// });


(function () {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button').addEventListener('click', function () {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();