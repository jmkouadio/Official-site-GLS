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

    const map = L.map('map').setView([5.3984, -3.9532], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© Glory Security Services'
    }).addTo(map);

    L.marker([5.3984, -3.9532]).addTo(map)
        .bindPopup("<b>Glory Security Services</b><br>Cocody, Angré, Carrefour des Oscars")
        .openPopup();

