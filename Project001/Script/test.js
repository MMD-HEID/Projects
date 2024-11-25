function add(button) {            //تابعی برای افزایش عدد روی دکمه محصولات
    if (button.innerText === 'Add to Cart') {
        button.innerText = "1"
    } else {
        let currentValue = +(button.innerText);
        button.innerText = currentValue + 1;    //افزایش عدد روی دکمه
    }
}
