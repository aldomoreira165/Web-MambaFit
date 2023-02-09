const detalleCompra = document.querySelector('#detalleInput');
const botonEnviar = document.querySelector('#boton-formulario-enviar');
let listaProductos = JSON.parse(localStorage.getItem('productos-en-carrito'));
let textoCompra = '';
let textoMensaje = '';
let totalCompra = 0;

//Obteniendo datos de los productos del carrito para redactar detalle de pedido
listaProductos.forEach(producto => {
    textoMensaje += `%0AProducto:%20${producto.nombre}%0ACantidad:%20${producto.cantidad}%0APrecio:%20Q${producto.precio}%0ASubtotal:%20Q${(producto.precio * producto.cantidad).toFixed(2)}%0A%0A`;

    textoCompra += `
    Producto: ${producto.nombre}
    Cantidad: ${producto.cantidad}
    Precio: ${producto.precio}
    Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}
   `
    totalCompra += producto.precio * producto.cantidad
});

textoMensaje += `Total:%20Q${totalCompra.toFixed(2)}`;
textoCompra += `\n    Total: Q${totalCompra.toFixed(2)}`;

//Asignando el detalle de compra al formulario
detalleCompra.value = textoCompra;

//Funcionalidad del boton enviar
botonEnviar.addEventListener('click', realizarCompra);

function realizarCompra() {

    //mensaje de whatsapp
    let nombreInput = document.querySelector('#nameInput');
    let emailInput = document.querySelector('#emailInput');
    let telInput = document.querySelector('#telInput');
    let direccionInput = document.querySelector('#direccionInput');
    let detalleInput = document.querySelector('#detalleInput');

    //validando que no hayan campos vacios
    if (nombreInput.value == '' || emailInput.value == '' || telInput.value == '' || direccionInput.value == '') {
        Swal.fire(
            '¡Error!',
            'Hay campos incompletos. Verifica que hayas ingresado toda la información necesaria..',
            'error'
        )
    } else {
        //redactando mensaje de whatsapp
        let mensaje = `Buen%20día,%20mis%20datos%20de%20pedido%20son%20los%20siguientes:%0ANombre:%20${nombreInput.value}%0ACorreo%20electrónico:%20${emailInput.value}%0ANúmero%20de%20teléfono:%20${telInput.value}%0ADirección%20de%20envío:%20${direccionInput.value}%0ADetalle:%20${textoMensaje}`
        //vaciando el carrito
        listaProductos.length = 0;
        localStorage.setItem('productos-en-carrito', JSON.stringify(listaProductos));

        botonEnviar.setAttribute('href', `https://wa.me/+50250348503?text=${mensaje}`)
    }
};

