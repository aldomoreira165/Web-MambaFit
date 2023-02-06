let productosEnCarrito = localStorage.getItem('productos-en-carrito');
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#productos-carrito-container');
const contenedorCarritoAcciones = document.querySelector('#acciones-carrito-container');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

function cargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add('disabled');
        contenedorCarritoProductos.classList.remove('disabled');
        contenedorCarritoAcciones.classList.remove('disabled');
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML = `
            <div id="tarjeta-producto-carrito" class="card">
                <div id="cuerpo-tarjeta-carrito" class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p id="texto-producto" class="card-text">Cantidad: ${producto.cantidad}</p>
                    <p id="texto-producto" class="card-text">Precio: Q${producto.precio}</p>
                    <p id="texto-producto" class="card-text">Subtotal: Q${(producto.precio * producto.cantidad).toFixed(2)}</p>
                </div>
                <div id="cuerpo-eliminar-producto" class="card-body">
                    <a id="${producto.id}" class="carrito-producto-eliminar"><i class="fas fa-times"></i></a>
                </div>
            </div>
            `;
            contenedorCarritoProductos.append(div);
        })
    } else {
        contenedorCarritoVacio.classList.remove('disabled');
        contenedorCarritoProductos.classList.add('disabled');
        contenedorCarritoAcciones.classList.add('disabled');
    }
    actualizarBotonesEliminar();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito)
    });
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}


