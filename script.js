console.clear();

gsap.registerPlugin(ScrollTrigger);

function showSelectedChild(sectionClass, childIndex) {
    // Récupérer tous les enfants .caroussel de la section donnée
    const section = document.querySelector(sectionClass);
    const children = section.querySelectorAll(".caroussel");

    // Boucle sur chaque enfant
    children.forEach((child, index) => {
        if (index === childIndex) {
            // Rendre l'enfant spécifié visible
            child.style.display = "block";
        } else {
            // Masquer tous les autres enfants
            child.style.display = "none";
        }
    });
}

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-zoom",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to(".eye-image", {
      scale: 3,
      z: 450,
      transformOrigin: "center center",
      filter:"blur(10px)",
      opacity: 0.5,              // Diminuer l'opacité à 50%
      ease: "power1.inOut"
    })
    .to(".eye-image", {
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


// Timeline pour contrôler le défilement des services
const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-service",  // La section parent des services
      snap: 0.5,
      start: "top top",             // Commence dès le début de la section
      end: "+=200%",         // Continue jusqu'à la fin de la section
      scrub: true,                  // L'animation est synchronisée avec le défilement
      pin: true,                    // Épingler la section pendant la durée du scroll
      anticipatePin: 1,             // Ajuster légèrement l'anticipation du pinning
      markers: true                 // Activer pour voir les marqueurs lors du débogage
    }
  });
  
  // Étapes de la timeline
  tl.call(() => showSelectedChild('.section-service', 0))  // Affiche service 1
    .to({}, { duration: 1 })  // Temps de transition avant d'activer la suivante
  
    .call(() => showSelectedChild('.section-service', 1))  // Affiche service 2
    .to({}, { duration: 1 })  // Temps de transition avant d'activer la suivante
  
    .call(() => showSelectedChild('.section-service', 2)); // Affiche service 3

    // Animation pour chaque slide
    // gsap.utils.toArray(".caroussel").forEach((section) => {
    //     console.log("entered array ")
    //     gsap.from(section.querySelector(".content-service"), {
    //     opacity: 0,
    //     y: 50,
    //     duration: 10,
    //     scrollTrigger: {
    //         trigger: section,              // La section elle-même déclenche l'animation
    //         start: "top center+=100",       // L'animation commence lorsque le haut de la section arrive à 100px au-dessus du centre de la fenêtre
    //         end: "+200%",           // L'animation est active jusqu'à ce que le bas de la section atteigne le centre
    //         toggleActions: "play none none none", // L'animation se joue une seule fois
    //         markers: true,                 // Activer si tu veux voir les marqueurs pour tester les zones de déclenchement
    //     }
    //     });
    // });

});
