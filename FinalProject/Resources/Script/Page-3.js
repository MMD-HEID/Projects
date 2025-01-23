document.addEventListener("DOMContentLoaded", () => {
    const destinations = document.querySelectorAll(".destination");

    destinations.forEach(destination => {
        destination.addEventListener("click", () => {
            const description = destination.querySelector(".description");
            const img = destination.querySelector("img");

            const isActive = !description.classList.contains("hidden");

            destinations.forEach(item => {
                item.querySelector(".description").classList.add("hidden");
                item.querySelector("img").style.transform = "scale(1)";
            });

            if (!isActive) {
                description.classList.remove("hidden");
                img.style.transform = "scale(1.2)";
            }
        });
    });
});
