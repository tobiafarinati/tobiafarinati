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
  
    // Centra l'immagine verticalmente
    const container = document.querySelector('.image-stack-container');
    const image = document.querySelector('.image-stack-item');
    
    function adjustTop() {
        const imageHeight = image.offsetHeight;
        const topValue = `calc(50% - ${imageHeight / 2}px)`;
        container.style.top = topValue;
        container.style.visibility = 'visible'; // Show the image after positioning
    }

    adjustTop();
    window.addEventListener('load', adjustTop);
    
    adjustTop();
    window.addEventListener('resize', adjustTop);
  
    // MODAL WINDOW
    // Get the modal
    var modal = document.getElementById("myModal");
  
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the page loads, open the modal 
    modal.style.display = "block";
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  });
  