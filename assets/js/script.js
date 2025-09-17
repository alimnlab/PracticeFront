"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('image-slider');
    
    if (sliderContainer) {
        const slides = sliderContainer.getElementsByTagName('img');
        let currentSlideIndex = 0;
         if (slides.length > 0) {
            setInterval(() => {
                slides[currentSlideIndex].classList.remove('active');
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
               slides[currentSlideIndex].classList.add('active');
            }, 4000); 
        }
    }
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }
});