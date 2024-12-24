// Get the button and container elements
const btnShow = document.getElementById("btnShow");
const container = document.querySelector(".container");

// Add an event listener for the button click
btnShow.addEventListener("click", () => {
    // Remove the 'hide' class and add the 'show' class to display the container
    container.classList.remove("hide");
    container.style.display = "flex";

    // Optionally, hide the button after it is clicked
    btnShow.style.display = "none";
});
