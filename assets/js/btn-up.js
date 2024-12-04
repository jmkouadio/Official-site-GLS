 // Lorsque l'utilisateur fait défiler vers le bas de 20 pixels à partir du haut du document, afficher le bouton
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
         document.getElementById("backToTopBtn").style.display = "block";
     } else {
         document.getElementById("backToTopBtn").style.display = "none";
     }
 }

 // Lorsque l'utilisateur clique sur le bouton, remontez en haut du document
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }