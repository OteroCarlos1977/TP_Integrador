document.addEventListener('DOMContentLoaded', function() {
const header = document.getElementById('header');
const contenedorGaleria = document.getElementById('contenedorGaleria');
const contenedorMenu = document.getElementById('contenedorMenu');
const contenedorMensaje = document.getElementById('contenedorMensaje');
const galeria =document.getElementById('galeria');
const salirGal = document.getElementById('salirGal');
const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const carouselDom = document.querySelector('.carousel');
const SliderDom = carouselDom.querySelector('.carousel .list');
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 3000;

nextDom.addEventListener('click', () => showSlider('next'));
prevDom.addEventListener('click', () => showSlider('prev'));

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)


function showSlider(type){
    const  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)


   
}

galeria.addEventListener('click', (event) => {
    event.preventDefault();
    contenedorGaleria.style.display = 'block';
    contenedorMenu.style.display = 'none';
    contenedorMensaje.style.display = 'none';
    header.style.display = 'none';

    document.body.style.backgroundImage = 'url("Imagenes/galeria.png")';
});

salirGal.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("El botón salir galería fue presionado");
    contenedorGaleria.style.display = 'none';
    contenedorMenu.style.display = 'block';
    contenedorMensaje.style.display = 'block';
    header.style.display = 'flex';

    document.body.style.backgroundImage = 'url("Imagenes/simpsonsback.jpg")';
});

});