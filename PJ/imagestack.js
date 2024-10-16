document.addEventListener('DOMContentLoaded', () => {
  const imageStackContainers = document.querySelectorAll('.image-stack-container');

  imageStackContainers.forEach(imageStackContainer => {
      // Event listener per il passaggio del mouse
      imageStackContainer.addEventListener('mouseenter', (event) => {
          event.preventDefault();
          let images = event.currentTarget.children;

          // Ruota casualmente le immagini
          Array.from(images).forEach(function(item) {
              item.style.transform = 'rotate(' + Math.floor(Math.random() * (8 - (-8) + 1) + (-8)) + 'deg)';
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

function adjustContainerHeight() {
    const container = document.querySelector('.image-stack-container');
    const items = document.querySelectorAll('.image-stack-item');
    const comment = document.querySelector('.comment');

    let maxHeight = 0;

    // Iterate through all image stack items to find the max height
    items.forEach(item => {
        if (item.offsetHeight > maxHeight) {
            maxHeight = item.offsetHeight; // Update maxHeight if current item's height is greater
        }
    });

    // Set the container's height to the max height of the images
    container.style.height = `${maxHeight}px`;

    // Make the container and comment visible after calculation
    container.style.visibility = 'visible';
    comment.style.visibility = 'visible';
}

// Call adjustContainerHeight when the window loads
window.addEventListener('load', adjustContainerHeight);

// Call adjustContainerHeight whenever the window is resized
window.addEventListener('resize', adjustContainerHeight);
