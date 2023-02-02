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
        <div id="tarjeta-producto" class="card">
            <img id="imagen-producto" src="${producto.imagen}" class="card-img-top">
            <div id="cuerpo-tarjeta" class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p id="texto-producto" class="card-text">Cantidad: ${producto.cantidad}</p>
                <p id="texto-producto" class="card-text">Precio: Q${producto.precio}</p>
                <p id="texto-producto" class="card-text">Subtotal: Q${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
        </div>
        `;
        contenedorCarritoProductos.append(div);
    })
} else {

}