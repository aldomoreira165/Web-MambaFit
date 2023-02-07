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

function realizarCompra(){
    Swal.fire(
        '¡Tu compra está casi lista!',
        'Espera un segundo...',
        'success'
    )
    listaProductos.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(listaProductos));
};
