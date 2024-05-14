document.addEventListener('DOMContentLoaded', function() {

const formContacto =document.getElementById ('formContacto');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formContacto.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById ('usuario').value;
    const email = document.getElementById('email').value;
    const imagen = document.getElementById ('imagen').value;
    const radioSi = document.getElementById ('radioSi').value;
    const radioNo = document.getElementById ('radioNo').value;
    const comentario = document.getElementById ('comentario').value;

    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    alert('¡Tu mensaje se ha enviado satisfactoriamente.Pronto te estaremos contestando!');

        window.location.href = 'index.html';




    });

//Función para la barra de navegación responsiva

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector ('.toggle_btn i');
const respMenu = document.querySelector('.responsive_navbar');

toggleBtn.onclick = function (event) {
    event.preventDefault();
    respMenu.classList.toggle('open')
    const isOpen = respMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};


});