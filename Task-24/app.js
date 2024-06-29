let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 0; // Changed initial slide index to 0
let isPlaying = false;

//image slider manual navigation

let manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual;
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
    });
});

let intervalId;

// Function to start autoplay
const startAutoplay = () => {
    isPlaying = true;
    intervalId = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        manualNav(currentSlide);
    }, 5000); // Adjust autoplay interval as needed (in milliseconds)
    document.querySelector('.toggle').textContent = 'Pause';
};

// Function to stop autoplay
const stopAutoplay = () => {
    isPlaying = false;
    clearInterval(intervalId);
    document.querySelector('.toggle').textContent = 'Play';
};

// Start autoplay when the page loads
startAutoplay();

// Play/Pause button functionality
document.querySelector('.toggle').addEventListener('click', () => {
    if (isPlaying) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});
