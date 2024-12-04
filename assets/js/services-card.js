document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.service-description').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.service-description').style.opacity = '0';
    });
  });