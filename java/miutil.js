q
let cantidad = 0;
const spanCantidad = document.getElementById('cantidad-compras');

const btnAumentar = document.getElementById('btn-aumentar');
const btnDisminuir = document.getElementById('btn-disminuir');
const btnAgregarCarrito = document.getElementById('btn-agregar-carrito');

if (btnAumentar) {
    btnAumentar.addEventListener('click', () => {
        cantidad++;
        if (spanCantidad) spanCantidad.textContent = cantidad;
    });
}

if (btnDisminuir) {
    btnDisminuir.addEventListener('click', () => {
        if (cantidad > 0) {
            cantidad--;
            if (spanCantidad) spanCantidad.textContent = cantidad;
        }
    });
}

if (btnAgregarCarrito) {
    btnAgregarCarrito.addEventListener('click', () => {
        if (cantidad > 0) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            
            const tituloH1 = document.querySelector('title');
            const nombreInstrumento = tituloH1 ? tituloH1.textContent.trim() : "Instrumento";

            
            let precioInstrumento = 150000; 
            
            
            const preciosMap = {
                "guitarra electrica": 850000,
                "guitarra": 70000,
                "bajo": 450000,
                "ukulele": 90000,
                "arpa": 800000,
                "triangulo": 35000,
                "pandereta": 45000,
                "congas": 800000,
                "cajon peruano": 250000,
                "bateria": 1200000,
                "Trompeta": 450000,
                "Trombón": 550000,
                "Saxofón": 1200000,
                "Flauta dulce": 30000,
                "clarinete": 800000
            };

            // Buscar coincidencia exacta o case-insensitive
            for (let key in preciosMap) {
                if (nombreInstrumento.toLowerCase() === key.toLowerCase()) {
                    precioInstrumento = preciosMap[key];
                    break;
                }
            }

            const index = carrito.findIndex(item => item.nombre.toLowerCase() === nombreInstrumento.toLowerCase());

            if (index !== -1) {
                carrito[index].cantidad += cantidad;
            } else {
                carrito.push({
                    nombre: nombreInstrumento,
                    cantidad: cantidad,
                    precioUnitario: precioInstrumento
                });
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('¡Instrumento(s) agregado(s) al carrito!');
        } else {
            alert('Selecciona al menos 1 unidad');
        }
    });
}
