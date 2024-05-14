// Cargar las preguntas frecuentes desde el archivo JSON
fetch('preguntas.json')
    .then(response => response.json())
    .then(data => mostrarFAQs(data.FAQs));

// Cargar las discusiones guardadas en el Local Storage al cargar la página
window.onload = function() {
    cargarDiscusiones();
};

// Función para mostrar las preguntas frecuentes
function mostrarFAQs(faqs) {
    const preguntasDiv = document.getElementById('preguntas-frecuentes');
    faqs.forEach(faq => {
        const preguntaHTML = `<div class="pregunta">
                                <h3>${faq.pregunta}</h3>
                                <p>${faq.respuesta}</p>
                            </div>`;
        preguntasDiv.innerHTML += preguntaHTML;
    });
}

// Función para guardar una nueva discusión en el Local Storage
function guardarDiscusion() {
    const nuevaDiscusion = document.getElementById('input-discusion').value;

    // Obtener las discusiones guardadas en el Local Storage
    let discusiones = JSON.parse(localStorage.getItem('discusiones')) || [];

    // Agregar la nueva discusión al arreglo
    discusiones.push(nuevaDiscusion);

    // Guardar el arreglo actualizado en el Local Storage
    localStorage.setItem('discusiones', JSON.stringify(discusiones));

    // Recargar las discusiones para reflejar la nueva
    cargarDiscusiones();

    // Mostrar una alerta de confirmación
    alert('Su discusión ha sido publicada');
}

// Función para cargar las discusiones guardadas del Local Storage
function cargarDiscusiones() {
    const discusiones = JSON.parse(localStorage.getItem('discusiones')) || [];

    // Limpiar el contenedor de discusiones
    const discusionesDiv = document.getElementById('discusiones-guardadas');
    discusionesDiv.innerHTML = '';

    // Si hay discusiones y no se ha agregado el título aún, agregar el título
    if (discusiones.length > 0 && !document.getElementById('titulo-discusiones')) {
        const tituloHTML = `<h3 id="titulo-discusiones">Discusiones</h3>`;
        discusionesDiv.innerHTML = tituloHTML;
    }

    // Mostrar las discusiones guardadas
    discusiones.forEach(discusion => {
        const discusionHTML = `<div class="discusion">
                                  <p>${discusion}</p>
                              </div>`;
        discusionesDiv.innerHTML += discusionHTML;
    });
}

