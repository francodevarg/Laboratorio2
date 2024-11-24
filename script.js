document.addEventListener("DOMContentLoaded", function() {
    const btnLeerMas = document.getElementById("btn-leer-mas");
    const textoCompleto = document.getElementById("texto-completo");
    if(btnLeerMas && textoCompleto){
        btnLeerMas.addEventListener("click", function () {
            if (textoCompleto.style.display === "none") {
                textoCompleto.style.display = "block";
                btnLeerMas.textContent = "Leer menos";
            } else {
                textoCompleto.style.display = "none";
                btnLeerMas.textContent = "Leer más...";
            }
        });
    }
    actualizarSuscripcionYContacto();
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Array de ids de los campos
const campos = ['nombre', 'apellido', 'email', 'telefono', 'edad', 'direccion', 'provincia', 'codigo_postal'];

// Función para actualizar el contenido de la tabla al cambiar un valor en el formulario
function actualizarTabla(id) {
    document.querySelector(`td[data-field="${id}"]`).textContent = document.getElementById(id).value;
}

// Añadimos un event listener para cada campo que ejecuta la función de actualización
campos.forEach(id => {
    let campoFormulario = document.getElementById(id);
    if(campoFormulario){
        campoFormulario.addEventListener('input', function() {
            actualizarTabla(id);
        });
    }

});

//Para mostrar en la tabla las suscripciones
function obtenerSuscripciones() {
    const suscripciones = [];    
    if (document.getElementById('noticias').checked) {
        suscripciones.push('Noticias');
    }
    if (document.getElementById('promociones').checked) {
        suscripciones.push('Promociones');
    }
    if (document.getElementById('alertas').checked) {
        suscripciones.push('Alertas');
    }
    if (document.getElementById('eventos').checked) {
        suscripciones.push('Eventos');
    }

    return suscripciones.join(', ');
}

//Para mostrar metodo de contacto en la tabla
function obtenerMetodoContacto() {
    const contacto = document.querySelector('input[name="contacto"]:checked');
    return contacto ? contacto.value : ''; 
}

// Función para actualizar la tabla con suscripciones y contacto
function actualizarSuscripcionYContacto() {
    const suscripcion = obtenerSuscripciones();
    const contacto = obtenerMetodoContacto();
    
    // Actualiza la tabla
    document.querySelector('td[data-field="suscripcion"]').textContent = suscripcion;
    document.querySelector('td[data-field="contacto"]').textContent = contacto;
}

document.querySelectorAll('input[name="suscripcion"]').forEach(input => {
    input.addEventListener('change', actualizarSuscripcionYContacto);
});
document.querySelectorAll('input[name="contacto"]').forEach(input => {
    input.addEventListener('change', actualizarSuscripcionYContacto);
});