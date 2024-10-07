// document.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const zoomContainer = document.querySelector('.eye-image');
//     const blackOverlay = document.querySelector('.black-overlay');

    
//     // Modifier cette valeur pour ajuster la vitesse de zoom
//     // const scaleFactor = 1 + scrollPosition / 650;
//     scaleFactor = 2;
    
//     // Limite le zoom pour éviter d'aller trop loin
//     if (scaleFactor <= 7) {
//         zoomContainer.style.transform = `scale(${scaleFactor})`;
//         zoomContainer.style.filter = `blur(${scrollPosition / 200}px)`; // Ajoute un flou progressif
//     }

//     // Augmente l'opacité de la couche noire au fur et à mesure du scroll
//     const overlayOpacity = Math.min(scrollPosition / 1000, 1); // Limite l'opacité à 1
//     blackOverlay.style.opacity = overlayOpacity;
// });


console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-zoom",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 3,
      z: 450,
      transformOrigin: "center center",
      filter:"blur(10px)",
      opacity: 0.5,              // Diminuer l'opacité à 50%
      ease: "power1.inOut"
    })
    .to("img", {
        filter: "blur(0px)",       // Retirer progressivement le flou pendant l'animation
        opacity: 0,                // Ramener l'opacité à 100% (complètement opaque)
        ease: "power1.inOut"
      })
    .to(
      ".zoom-content-container",
      {
        scale: 1.1,
        opacity: 1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    ); 
});