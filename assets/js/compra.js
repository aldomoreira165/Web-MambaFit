const detalleCompra = document.querySelector('#detalleInput');
var listaProductos = JSON.parse(localStorage.getItem('productos-en-carrito'));
var textoCompra = '';
var totalCompra = 0;

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

