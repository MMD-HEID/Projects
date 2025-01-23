const btnShow = document.getElementById("btnShow");
const container = document.querySelector(".container");

btnShow.addEventListener("click", () => {
    container.classList.remove("hide");
    container.classList.add("show");

    btnShow.classList.add("hide");
});
