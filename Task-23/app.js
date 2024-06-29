// Function to toggle the visibility of the modal
function toggleModal() {
    // Toggle the 'active' class of the modal container
    document.getElementById("modal-1").classList.toggle("active");
}

// Function to close the modal
function closeModal() {
    // Remove the 'active' class from the modal container, effectively hiding it
    document.getElementById("modal-1").classList.remove("active");
}
