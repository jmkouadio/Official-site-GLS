
const slides_testimonial = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.suivant');
let currentSlide = 0;

function showTestimonialSlide(index) {  // Fonction renommée
    slides_testimonial.forEach(slide => {
        slide.classList.remove('active');
    });
  
    if (index >= slides_testimonial.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides_testimonial.length - 1;
    } else {
        currentSlide = index;
    }
  
    slides_testimonial[currentSlide].classList.add('active');
}

prevButton.addEventListener('click', () => {
    showTestimonialSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    showTestimonialSlide(currentSlide + 1);
});

// Défilement automatique des témoignages
setInterval(() => {
    showTestimonialSlide(currentSlide + 1);
}, 5000);
