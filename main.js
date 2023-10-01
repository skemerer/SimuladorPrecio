
function calcularPrecioFinal() {
    const producto = document.getElementById("producto").value;
    const impuesto = parseFloat(document.getElementById("impuesto").value);
    const descuento = parseFloat(document.getElementById("descuento").value);

    if (producto === "0") {
        alert("Por favor, selecciona un producto.");
    } else {
        // Calcula el precio con impuesto y descuento.
        const precioInicial = parseFloat(producto);
        const impuestoAplicado = (impuesto / 100) * precioInicial;
        const descuentoAplicado = (descuento / 100) * precioInicial;

        const precioFinal = precioInicial + impuestoAplicado - descuentoAplicado;

        // Muestra el resultado en la página.
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `Precio Final: $${precioFinal.toFixed(2)}`;
    }
}

document.getElementById("calcularBtn").addEventListener("click", calcularPrecioFinal);