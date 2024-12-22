// import { slides } from "./data/slides.js";

// renderSlides();

// function renderSlides() {
//   let html = '';

//   slides.forEach(slide => {
//     html = `
//       <img src="${slide.image}" alt="">
//       <p>${slide.vocabulary}</p>
//     `;
//   });

//   document.querySelector('.slide-wrapper')
//     .innerHTML = html;
// }

const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(index) {
  if(index >= slides.length) {
    slideIndex = 0;
  }
  else if(index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('active');
  })
  slides[slideIndex].classList.add('active');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
document.querySelector('.prev-arrow')
  .addEventListener('click', () => {
    prevSlide();
  });

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
document.querySelector('.next-arrow')
  .addEventListener('click', () => {
    nextSlide();
  });
