// Select necessary DOM elements
let overlay = document.querySelector(".galleryoverlay");
let imageBox = document.querySelector(".imgBox");
var img = document.querySelector(".imgBox img");
let close = document.querySelector(".imgBox span");

// Select the gallery container
let gallery = document.querySelector("#gallery");

// Event listener for clicking on an image in the gallery
gallery.addEventListener("click", (event) => {
    // Get the clicked image's source path
    let currentImagePath = event.target.src;

    // Check if the clicked element is an image
    if (currentImagePath !== undefined) {
        // Add class to show the overlay and image box
        overlay.classList.add('galleryoverlayShow');
        imageBox.classList.add('imgBoxshow');

        // Set the source of the image box to the clicked image
        img.src = currentImagePath;
    }
});

// Event listener for clicking on the close button
close.addEventListener("click", () => {
    // Remove classes to hide the overlay and image box
    overlay.classList.remove('galleryoverlayShow');
    imageBox.classList.remove('imgBoxshow');
});

// Event listener for clicking on the overlay to close the image
overlay.addEventListener("click", () => {
    // Remove classes to hide the overlay and image box
    overlay.classList.remove('galleryoverlayShow');
    imageBox.classList.remove('imgBoxshow');
});

