/*Funcionalidad de seccion productos*/

//Productos

const productos = [
    {
        id: 'straps-01',
        nombre: 'Straps',
        imagen: 'assets/images/straps.jpeg',
        precio: '150.00',
        detalle: 'Detalle straps'
    },
    {
        id: 'muñequeras-01',
        nombre: 'Muñequeras',
        imagen: 'assets/images/muñequeras2.jpg',
        precio: '165.00',
        detalle: 'Detalle muñequeras'
    },
    {
        id: 'cincho-01',
        nombre: 'Cincho',
        imagen: 'assets/images/cincho.jpeg',
        precio: '550.00',
        detalle: 'Detalle straps'
    },
    {
        id: 'bandas-01',
        nombre: 'Kit de 3 bandas de resistencia',
        imagen: 'assets/images/bandas.jpeg',
        precio: '150.00',
        detalle: 'Detalle bandas de resistencia'
    },
    {
        id: 'guantes-01',
        nombre: 'Guantes',
        imagen: 'assets/images/guantes.jpeg',
        precio: '150.00',
        detalle: 'Detalle guantes'
    },
    {
        id: 'rodilleras-01',
        nombre: 'Rodilleras',
        imagen: 'assets/images/rodilleras.jpeg',
        precio: '195.00',
        detalle: 'Detalle rodilleras'
    },
    {
        id: 'balanza-01',
        nombre: 'Balanza de cocina',
        imagen: 'assets/images/balanza.jpeg',
        precio: '95.00',
        detalle: 'Detalle balanza'
    }
]

/*Añadiendo los productos dinámicamente*/

const contenedorProductos = document.getElementById('productos-container')
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML += `
            <div id="tarjeta-producto" class="card">
                <img id="imagen-producto" src="${producto.imagen}" class="card-img-top">
                <div id="cuerpo-tarjeta" class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p id="texto-producto" class="card-text">${producto.detalle}</p>
                    <p id="texto-producto" class="card-text">Precio: Q${producto.precio}</p>
                    <div id="btn-container">
                        <a id="${producto.id}" class="btn producto-agregar">Agregar al carrito de compras</a>
                    </div> 
                </div>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}

cargarProductos();

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    });
}

function agregarAlCarrito() {
    Swal.fire({
        title: '¿Estás seguro de agregar este producto al carrito de compras?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#329413',
        cancelButtonColor: '#A31919',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Producto agregado correctamente!',
            'Puedes verificarlo en el carrito de compras.',
            'success'
          )
        }
      })
}
