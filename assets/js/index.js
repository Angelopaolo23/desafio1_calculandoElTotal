function calcular() {
    const precioComputador = document.querySelector("#precio_unidad").innerHTML;
    const button = document.querySelector("button");
    const cantidad = document.querySelector("#cantidad_input").value;
    const color = document.querySelector("#color_input").value;
    const muestraColor = document.querySelector(".muestra");
    const cantidadTotal = document.querySelector("#cantidad_total")
    const precioTotal = parseInt(cantidad)*parseInt(precioComputador);
    document.querySelector("#monto_compra").innerHTML = Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(precioTotal)
    muestraColor.style.backgroundColor = color
    cantidadTotal.innerHTML = cantidad
}