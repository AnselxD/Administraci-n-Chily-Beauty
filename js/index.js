const DatosContainer = document.getElementById("DatosContainer");
const detalleContainer = document.getElementById("detalleContainer");
let indiceSeleccionado;

const articuloElement = document.getElementById("articulo");
const almacen_tiendaElement = document.getElementById("almacen_tienda");
const almacen_centralElement = document.getElementById("almacen_central");
const almacen_enviosElement = document.getElementById("almacen_envios");
const observacionesElement = document.getElementById("observaciones");
const finalizarElement = document.getElementById("finalizar");


let currentIndex = 0;

// Función para mostrar la tarjeta actual en el carrusel
function showCurrentTarjeta() {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

// Crear tarjeta de datos
function createTarjeta(Dato, index) {
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.innerHTML = `
        <h3>${Dato.articulo}</h3>
        <p>Almacén Tienda: ${Dato.almacen_tienda} und.</p>
        <p>Almacén Central: ${Dato.almacen_central} und.</p>
        <p>Almacén Envíos: ${Dato.almacen_envios} und.</p>
        <p>Almacén Live's: ${Dato.almacen_lives} und.</p>
        <p>Observaciones: ${Dato.observaciones}</p>
    `;
    DatosContainer.appendChild(nuevaTarjeta);
    showCurrentTarjeta();
}

// Botones de navegación del carrusel
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showCurrentTarjeta();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < Datos.length - 1) {
        currentIndex++;
        showCurrentTarjeta();
    }
});

// Actualizar tarjetas en el contenedor
function actualizarTarjetas() {
    DatosContainer.innerHTML = "";
    Datos.forEach((Dato, i) => {
        createTarjeta(Dato, i);
    });
}
