// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'accordion-header'
    let accordionHeaders = document.querySelectorAll('.accordion-header');

    // Iterate over each 'accordion-header' element
    accordionHeaders.forEach(header => {
        // Add a click event listener to each 'accordion-header'
        header.addEventListener('click', function () {
            // Get the parent element of the clicked 'accordion-header', which is the 'accordion-item'
            let accordionItem = this.parentElement;
            // Find the corresponding 'accordion-content' within the 'accordion-item'
            let accordionContent = accordionItem.querySelector('.accordion-content');

            // Check if the clicked 'accordion-item' is currently active
            if (accordionItem.classList.contains('active')) {
                // If it's active, remove the 'active' class to collapse the accordion item
                accordionItem.classList.remove('active');
                // Reset the max-height of the 'accordion-content' to collapse it smoothly
                accordionContent.style.maxHeight = null;
                // Change the arrow icon to point right indicating collapsed state
                this.classList.remove('arrow-down');
                this.classList.add('arrow-right');
            } else {
                // If the clicked 'accordion-item' is not active
                // First, close all other accordion items
                closeAllAccordionItems();
                // Then, add the 'active' class to the clicked 'accordion-item' to expand it
                accordionItem.classList.add('active');
                // Set the max-height of the 'accordion-content' to its scrollHeight to expand it smoothly
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                // Change the arrow icon to point down indicating expanded state
                this.classList.remove('arrow-right');
                this.classList.add('arrow-down');
            }
        });
    });

    // Function to close all accordion items
    function closeAllAccordionItems() {
        // Select all elements with the class 'accordion-item'
        let allAccordionItems = document.querySelectorAll('.accordion-item');
        // Iterate over each 'accordion-item'
        allAccordionItems.forEach(item => {
            // Remove the 'active' class from each 'accordion-item' to collapse them
            item.classList.remove('active');
            // Reset the max-height of the 'accordion-content' within each item
            let content = item.querySelector('.accordion-content');
            content.style.maxHeight = null;
            // Change the arrow icon to point right for each 'accordion-header'
            let header = item.querySelector('.accordion-header');
            header.classList.remove('arrow-down');
            header.classList.add('arrow-right');
        });
    }
});


