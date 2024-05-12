document.addEventListener('DOMContentLoaded', function () {
    const formRegistro = document.getElementById('formRegistro');

    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Escuchar el evento submit en el formulario de registro
    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que se envíe el formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const usuario = document.getElementById('usuarioRegistro').value;
        const password = document.getElementById('paswordRegistro').value;

        // Validar el correo electrónico con la expresión regular
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Guardar en el localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('email', email);
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);

        alert('¡Registro exitoso!');

        window.location.href = 'index.html';
        
    });

    formLogin.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const usuario = document.getElementById('usuarioLogin').value;
        const password = document.getElementById('paswordLogin').value;

        // Obtener los datos guardados en el localStorage
        const storedUsuario = localStorage.getItem('usuario');
        const storedPassword = localStorage.getItem('password');

        // Comparar los datos ingresados con los guardados
        if (usuario === storedUsuario && password === storedPassword) {
            alert('¡Inicio de sesión exitoso!');
            
            window.location.href = 'index.html';
            // Aquí podrías redirigir al usuario a la página principal, por ejemplo.
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
});