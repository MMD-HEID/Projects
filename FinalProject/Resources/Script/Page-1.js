const galaxyCanvas = document.getElementById("galaxyCanvas");
const ctx = galaxyCanvas.getContext("2d");
const planets = document.querySelectorAll(".planet");
const hobbies = document.querySelector(".divHobbies");  // Get the specific hobbies div
const contacts = document.querySelector(".divContacts");
const closeButtons = document.querySelectorAll(".btnCls");  // Select all close buttons

function resizeCanvas() {
    galaxyCanvas.width = window.innerWidth;
    galaxyCanvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];
const numStars = 100;

function initStars() {
    stars.length = 0;
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * galaxyCanvas.width,
            y: Math.random() * galaxyCanvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
        });
    }
}

initStars();

function animateStars() {
    ctx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();

        star.y += star.speed;

        if (star.y > galaxyCanvas.height) {
            star.y = 0;
            star.x = Math.random() * galaxyCanvas.width;
        }
    });

    requestAnimationFrame(animateStars);
}

animateStars();

planets.forEach((planet) => {
    planet.addEventListener("click", () => {
        const planetName = planet.getAttribute("data-info");
        if (planetName === "Hobbies") {
            hobbies.classList.add("show");
        }
        if (planetName === "Contacts") {
            contacts.classList.add("show");
        }
    });
});

closeButtons.forEach((closeButton) => {
    if (contacts.classList.contains("hidden") || hobbies.classList.contains("hidden")) {
        closeButton.addEventListener("click", () => {
            hobbies.classList.remove("show");
            contacts.classList.remove("show");
            // hobbies.style.display = "none";
            // contacts.style.display = "none";
        });
    }
});
