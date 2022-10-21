//declaracion de variables de referencia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.preventDefault();
    
    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        creaMensaje('Bro, por favor llena el formulario', 'danger');
        return;        
    }

    const usuario = {
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passValue
    }
    
    localStorage.setItem('usuario', JSON.stringify(usuario));

     nombre.value = '';
     email.value = '';
     user.value = '';
     pass.value = '';

    creaMensaje('Usuario Registrado Correctamente', 'success');
}

function creaMensaje(texto , tipo){
    const nuevoElelento = document.createElement('div');
    nuevoElelento.innerText = texto;
    nuevoElelento.classList.add('alert', 'alert-'+tipo);
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElelento);
    setTimeout(function(){
        nuevoElelento.remove();
    }, 2000);
}
