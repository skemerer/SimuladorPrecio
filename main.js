
// Función para ingresar datos del producto con prompt
function ingresarDatosProducto() {
    const nombreProducto = prompt("Ingrese el nombre del producto:");
    const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    return { nombre: nombreProducto, precio: precioProducto };
}

// Función para calcular el precio final con impuestos y descuentos
function calcularPrecioFinal(producto, impuesto, descuento) {
    const impuestoAplicado = (impuesto / 100) * producto.precio;
    const descuentoAplicado = (descuento / 100) * producto.precio;
    const precioFinal = producto.precio + impuestoAplicado - descuentoAplicado;

    return precioFinal;
}

// Función para mostrar datos en alert y console.log
function mostrarDatos(producto, impuesto, descuento, precioFinal) {
    alert(`Nombre del producto: ${producto.nombre}\nPrecio del producto: $${producto.precio}\nImpuesto aplicado (%): ${impuesto}%\nDescuento aplicado (%): ${descuento}%\nPrecio Final: $${precioFinal.toFixed(2)}`);

    console.log("Datos del producto:");
    console.log(`Nombre del producto: ${producto.nombre}`);
    console.log(`Precio del producto: $${producto.precio}`);
    console.log(`Impuesto aplicado (%): ${impuesto}%`);
    console.log(`Descuento aplicado (%): ${descuento}%`);
    console.log(`Precio Final: $${precioFinal.toFixed(2)}`);
}

// Función principal del simulador
function simuladorPrecioProducto() {
    const producto = ingresarDatosProducto();
    const impuesto = parseFloat(prompt("Ingrese el impuesto aplicado (%):"));
    const descuento = parseFloat(prompt("Ingrese el descuento aplicado (%):"));

    if (!isNaN(producto.precio) && !isNaN(impuesto) && !isNaN(descuento)) {
        const precioFinal = calcularPrecioFinal(producto, impuesto, descuento);
        mostrarDatos(producto, impuesto, descuento, precioFinal);
    } else {
        alert("Por favor, ingrese valores numéricos válidos.");
    }
}

// Llamar a la función principal del simulador al cargar la página
window.onload = function () {
    simuladorPrecioProducto();
};