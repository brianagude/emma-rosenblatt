// // pick all of the images and layer them based on the z-index

// var slideArea = document.querySelector(".slides");
// const images = slideArea.querySelectorAll("img");

// // keep track of 1. which slide are we on 2. z-index

// let currentSlide = 0
// let z = 1

// // when I click slideArea, change the slide based on the z-index
// slideArea.addEventListener("click", function () {
//   currentSlide = currentSlide + 1

//   if (currentSlide > images.length - 1) {
//     currentSlide = 0
//   }

//   z = z + 1

//   //   remove the animation from the style for every image
//   images.forEach(image => {
//     image.style.animation = ""
//   })


//   //   pick the right image
//   images[currentSlide].style.zIndex = z
//   images[currentSlide].style.animation = "fade 0.5s"



// })

// slideArea.addEventListener("mouseover", function () {
//   images.forEach(image => {
//     const x = 25 * (Math.floor(Math.random() * 5)) - 50
//     const y = 25 * (Math.floor(Math.random() * 5)) - 50

//     image.style.transform = `translate(${x}px, ${y}px)`
//   })
// })


// // when I move my mouse away, put the images back
// slideArea.addEventListener(`mouseout`, function () {
//   images.forEach(image => {
//     image.style.transform = ``
//   })
// })












