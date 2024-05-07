const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const carrousel = document.querySelector("#carrousel");
const carrouselItem = document.querySelectorAll(".carousel-item");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / carrouselItem.length;

function moveToRight() {
    if (counter >= carrouselItem.length-1) {
        counter = 0;
        operacion = 0;
        carrousel.style.transform = `translate(-${operacion}%)`;
        carrousel.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    carrousel.style.transform = `translate(-${operacion}%)`;
    carrousel.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = carrouselItem.length-1;
        operacion = widthImg * (carrouselItem.length-1)
        carrousel.style.transform = `translate(-${operacion}%)`;
        carrousel.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    carrousel.style.transform = `translate(-${operacion}%)`;
    carrousel.style.transition = "all ease .6s"
    
    
} 