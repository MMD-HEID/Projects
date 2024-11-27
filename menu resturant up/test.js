// const min = document.querySelectorAll('.min');
// const add = document.querySelectorAll('.add');

function add(button){
    if (button.querySelector("p").innerText === "Add to Cart"){
        button.querySelector("p").innerText = "1";
        button.querySelector('.add').classList.remove('show');
        button.querySelector('.min').classList.remove('show');
        button.querySelector('.sabad').classList.add('show');
        button.style.backgroundColor="hsl(14, 86%, 42%)";
        button.disabled = true;
    }
}

function min(img){
    let button = img.closest("button");
    let pTag = button.querySelector("p");
    pTag.innerText = +pTag.innerText - 1;
    if (pTag.innerText == 0){
        button.querySelector('.add').classList.add('show');
        button.querySelector('.min').classList.add('show');
        button.querySelector('.sabad').classList.remove('show');
        button.style.backgroundColor="white";
        button.querySelector("p").innerText = "Add to Cart";
        button.disabled = false;
    }
}
function plus(img){
    let pTag = img.closest("button").querySelector("p");
    pTag.innerText = +pTag.innerText + 1;
}