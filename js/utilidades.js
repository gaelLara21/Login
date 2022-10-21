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