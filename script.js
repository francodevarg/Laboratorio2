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
    document.getElementById(id).addEventListener('input', function() {
        actualizarTabla(id);
    });
});
