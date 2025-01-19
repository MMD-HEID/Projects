document.addEventListener("DOMContentLoaded", () => {
    // Select all destination containers
    const destinations = document.querySelectorAll(".destination");

    // Add click event listeners to each destination
    destinations.forEach(destination => {
        destination.addEventListener("click", () => {
            const description = destination.querySelector(".description");
            const img = destination.querySelector("img");

            // Check if the clicked destination is currently active
            const isActive = !description.classList.contains("hidden");

            // Hide all descriptions and reset images
            destinations.forEach(item => {
                item.querySelector(".description").classList.add("hidden");
                item.querySelector("img").style.transform = "scale(1)";
            });

            // If the clicked destination was not active, show it
            if (!isActive) {
                description.classList.remove("hidden");
                img.style.transform = "scale(1.2)";
            }
        });
    });
});
