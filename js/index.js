//declarar variables para vincular los objetos del formulario 
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal ==''){
        creaMensaje('Bro, llena los campos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            creaMensaje('Usuario correcto', 'success');
            setTimeout(function(){
                location.href="inicio.html";
            },2000);
        } else {
            creaMensaje('Usuario Incorecto', 'danger');
        } 
    } else{
        creaMensaje('El usuario no existe', 'danger' );
    }


}