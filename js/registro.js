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
    let emaileVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;

    if(nombreVal == '' || emaileVal == '' || userVal == '' || passValue == ''){
        return;
    }

    console.log('Validando datos');

}

