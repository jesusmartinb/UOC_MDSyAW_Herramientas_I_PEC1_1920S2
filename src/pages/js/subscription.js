export function confirmarEnvio(event) {
    event.preventDefault();
    let subscribe = document.getElementById('subscribe');
    let confirma = document.getElementById('confirma');
    let subscribes = subscribe.value;
    if(subscribes === "") {
        confirma.style.display = 'block';
        confirma.style.color = 'red';
        confirma.innerHTML = 'Introduce tu Correo Electrónico, por favor.';
    }else if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(subscribes)) {
        confirma.style.display = 'block';
        confirma.style.color = '#00ffd5';
        confirma.innerHTML = 'E-mail enviado';
    }else{
        confirma.style.display = 'block';
        confirma.style.color = 'red';
        confirma.innerHTML = 'Introduce un Correo Electrónico valido, por favor.';
    }
    setTimeout(function () {
        confirma.style.display = 'none';
        subscribe.value = '';
    },4000)
}
