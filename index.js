// Carrousel principal (Slider)
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const sliderImg = document.querySelector('.slider-img');
let currentIndex = 0;

// Afficher le premier fond au chargement
showSlide(currentIndex);

// Configuration du défilement automatique
let autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000); // 3 secondes

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    showSlide(currentIndex - 1);
    startAutoSlide();
});

document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    showSlide(currentIndex + 1);
    startAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        showSlide(index);
        startAutoSlide();
    });
});

function showSlide(index) {
    dots[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    dots[currentIndex].classList.add('active');
    sliderImg.style.backgroundImage = `url(${slides[currentIndex].src})`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

// Carrousel de témoignages (Testimonial)
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


/*accompagnement js*/

const stepItems = document.querySelectorAll('.step-item');
const stepDetails = document.querySelectorAll('.step-details');

stepItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    stepItems.forEach(step => step.classList.remove('active'));
    stepDetails.forEach(detail => detail.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');
    const stepId = item.getAttribute('data-step');
    document.getElementById(stepId).classList.add('active');
  });
});






// Amélioration possible : Ajouter des animations plus complexes
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.service-description').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.service-description').style.opacity = '0';
    });
  });


// Initialiser la carte et définir la vue

    const map = L.map('map').setView([5.366299, -3.997642], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© Glory Security Services'
    }).addTo(map);

    L.marker([5.366299, -3.997642]).addTo(map)
        .bindPopup("<b>Glory Security Services</b><br>Cocody, Angré, Carrefour des Oscars")
        .openPopup();

