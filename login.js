/*Validación Formulario Contacto*/
document.getElementById('formulario').addEventListener('submit', function(event) {
    const usuario = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const fanatico = document.querySelector('input[name="fanatico"]:checked');
    const imagen = document.getElementById('imagen').files[0];

    if (!usuario || !email || !fanatico || !imagen) {
        event.preventDefault(); 
        alert('Por favor, complete todos los campos obligatorios.');
    }
});

