document.addEventListener('DOMContentLoaded', () => {
  const imageStackContainers = document.querySelectorAll('.image-stack-container');

  imageStackContainers.forEach(imageStackContainer => {
      // Event listener per il passaggio del mouse
      imageStackContainer.addEventListener('mouseenter', (event) => {
          event.preventDefault();
          let images = event.currentTarget.children;

          // Ruota casualmente le immagini
          Array.from(images).forEach(function(item) {
              item.style.transform = 'rotate(' + Math.floor(Math.random() * (10 - (-10) + 1) + (-10)) + 'deg)';
              item.style.transitionTimingFunction = 'ease-in';
              item.style.transitionDuration = '500ms';
          });
      });

      // Event listener per l'uscita del mouse
      imageStackContainer.addEventListener('mouseleave', (event) => {
          event.preventDefault();
          let images = event.currentTarget.children;

          // Resetta la rotazione delle immagini
          Array.from(images).forEach(function(item) {
              item.style.transform = 'rotate(0deg)';
              item.style.transitionTimingFunction = 'ease-out';
              item.style.transitionDuration = '500ms';
          });
      });

      // Event listener per il click - passare all'immagine successiva
      imageStackContainer.addEventListener('click', (event) => {
          event.preventDefault();
          let images = event.currentTarget.children;

          // Sposta la prima immagine alla fine della lista
          if (images.length > 1) {
              let firstImage = images[0];
              imageStackContainer.append(firstImage);
          }
      });
  });
});
