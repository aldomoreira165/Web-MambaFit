//clase sin utilizar
const botonEnviar = document.querySelector('#boton-formulario-enviar');
let formCorreo = document.querySelector('#form-correo');
let nombreInput = document.querySelector('#nameInput');
let emailInput = document.querySelector('#emailInput');
let asuntoInput = document.querySelector('#asuntoInput');
let mensajeInput = document.querySelector('#mensajeInput');

botonEnviar.addEventListener('click', enviarCorreo);

function enviarCorreo(){
    if (nombreInput.value == '' || emailInput.value == '' || asuntoInput.value == '' || mensajeInput.value == '') {
        Swal.fire(
            '¡Error!',
            'Hay campos incompletos. Verifica que hayas ingresado toda la información necesaria..',
            'error'
        )
    } else {
        formCorreo.setAttribute('action', 'https://formsubmit.co/aldovasquez2014@gmail.com');
        Swal.fire(
            '¡Mensaje enviado correctamente!',
            'Pronto nos pondremos en contacto contigo.',
            'success'
        )
    }
}
