const detalleCompra = document.querySelector('#detalleInput');
const botonEnviar = document.querySelector('#boton-formulario-enviar');
let listaProductos = JSON.parse(localStorage.getItem('productos-en-carrito'));
let textoCompra = '';
let totalCompra = 0;

listaProductos.forEach(producto => {
    textoCompra += `
    Producto: ${producto.nombre}
    Cantidad: ${producto.cantidad}
    Precio: ${producto.precio} 
    Subtotal: Q${(producto.precio * producto.cantidad).toFixed(2)}
   `
    totalCompra += producto.precio * producto.cantidad
});

textoCompra += `\n    Total: Q${totalCompra.toFixed(2)}`;

detalleCompra.value = textoCompra;

botonEnviar.addEventListener('click', realizarCompra);

function realizarCompra() {

    //mensaje de whatsapp
    let nombreInput = document.querySelector('#nameInput');
    let emailInput = document.querySelector('#emailInput');
    let telInput = document.querySelector('#telInput');
    let direccionInput = document.querySelector('#direccionInput');
    let detalleInput = document.querySelector('#detalleInput');

    let mensaje = `Buen día, mis datos de pedido son los siguientes: 
    Nombre: ${nombreInput.value}\n
    Correo electrónico: ${emailInput.value}\n
    Número de teléfono: ${telInput.value}\n
    Dirección de envío: ${direccionInput.value}\n
    Detalle de pedido: ${detalleInput.value}\n
    `
    botonEnviar.setAttribute('href', `https://wa.me/50348503?text=${mensaje}`)

    listaProductos.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(listaProductos));
};

