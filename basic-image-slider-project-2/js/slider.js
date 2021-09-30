document.addEventListener('DOMContentLoaded', () => {

  let slides = document.querySelectorAll('.wrapper .slide')
  let currentSlide = 0
  const buttonLeft = document.querySelector('.left')
  const buttonRight = document.querySelector('.right')
    
    
  function nextSlide() {
    slides[currentSlide].className = 'slide'
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].className = 'slideshowing'
  } 
      
  function prevSlide() {
    slides[currentSlide].className = 'slide'
    currentSlide = (currentSlide - 1) % slides.length
    if (currentSlide === -1) {
    currentSlide = slides.length - 1}
    slides[currentSlide].className = 'slideshowing'
  }

 buttonLeft.addEventListener('click', prevSlide)
 buttonRight.addEventListener('click', nextSlide)

})