const langCheckbox = document.getElementById("langChk");
const farsiTexts = document.querySelectorAll(".pPP");
const englishTexts = document.querySelectorAll(".pPE");
const slides = document.querySelectorAll(".divInfo");
const dots = document.querySelectorAll(".divDot");

let currentSlideIndex = 0;
let slideshowInterval;

langCheckbox.addEventListener("change", () => {
    if (langCheckbox.checked) {
        englishTexts.forEach(text => {
            text.classList.replace("hidden", "show");
        });
        farsiTexts.forEach(text => {
            text.classList.replace("show", "hidden");
        });
    } else {
        farsiTexts.forEach(text => {
            text.classList.replace("hidden", "show");
        });
        englishTexts.forEach(text => {
            text.classList.replace("show", "hidden");
        });
    }
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "flex";
        } else {
            slide.style.display = "none";
        }
    });

    dots.forEach((dot, i) => {
        dot.style.backgroundColor = i === index ? "#00ADB5" : "dimgray";
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 3000); // Change every 3 seconds
}

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

slides.forEach(slide => {
    slide.addEventListener("mouseenter", pauseSlideshow); // Pause on hover
    slide.addEventListener("mouseleave", startSlideshow); // Resume on mouse leave
});

showSlide(currentSlideIndex);
startSlideshow();