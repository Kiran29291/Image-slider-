let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = translateX(${(i - index) * 100}%);
    });
}

function changeSlide(n) {
    currentSlideIndex+= n;
    if (currentSlideIndex>= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex< 0) currentSlideIndex = slides.length - 1;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Initialize the slider
showSlide(currentSlideIndex);
