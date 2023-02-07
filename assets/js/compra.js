
const detalleCompra = document.querySelector('#detalleInput');
var listaProductos = JSON.parse(localStorage.getItem('productos-en-carrito'));
var textoCompra;

listaProductos.forEach(producto => {
    textoCompra += `
    Producto: ${producto.nombre}
    Precio: ${producto.precio} 
    Cantidad: ${producto.cantidad}
   `
});

detalleCompra.value = textoCompra;

