const btnShow = document.getElementById("btnShow");
const container = document.querySelector(".container");

btnShow.addEventListener("click", () => {
    container.classList.add("show");
    btnShow.style.display = "none";
});
