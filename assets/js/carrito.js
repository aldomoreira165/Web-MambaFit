const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'));

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#productos-carrito-container');
const contenedorCarritoAcciones = document.querySelector('#acciones-carrito-container');

if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('carrito-producto');
        div.innerHTML = `
        <div id="tarjeta-producto-carrito" class="card">
            <div id="cuerpo-imagen-producto" class="card-body">
                <img id="imagen-producto-carrito" src="${producto.imagen}" class="card-img-top">
            </div>
            <div id="cuerpo-tarjeta-carrito" class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p id="texto-producto" class="card-text">Cantidad: ${producto.cantidad}</p>
                <p id="texto-producto" class="card-text">Precio: Q${producto.precio}</p>
                <p id="texto-producto" class="card-text">Subtotal: Q${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
            <div id="cuerpo-eliminar-producto" class="card-body">
                <a href=""><i class="fas fa-times"></i></a>
            </div>
        </div>
        `;
        contenedorCarritoProductos.append(div);
    })
} else {

}