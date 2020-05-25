export function confirmEnvio(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let comentario = document.getElementById('comentario');
    let confirmNombre = document.getElementById('confirmNombre');
    let confirmEmail = document.getElementById('confirmEmail');
    let confirmText = document.getElementById('confirmText');
    let confirmForm = document.getElementById('confirmForm');
    let emailCorrecto = false;

    let nombres = nombre.value;
    let emails = email.value;
    let comentarios = comentario.value;

    if(nombres === ""){
        confirmNombre.style.display = 'block';
        confirmNombre.style.color = 'red';
        confirmNombre.innerHTML = 'Introduce tu Nombre, por favor.';

        setTimeout(function () {
            confirmNombre.style.display = 'none';
            nombre.value = '';
        },5000)
    }
    if(emails === ""){
        confirmEmail.style.display = 'block';
        confirmEmail.style.color = 'red';
        confirmEmail.innerHTML = 'Introduce tu Correo Electrónico, por favor.';

        setTimeout(function () {
            confirmEmail.style.display = 'none';
            email.value = '';
        },5000)
    }else if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(emails)) {
        emailCorrecto = true;
    }else{
        confirmEmail.style.display = 'block';
        confirmEmail.style.color = 'red';
        confirmEmail.innerHTML = 'Introduce un Correo Electrónico valido, por favor.';

        setTimeout(function () {
            confirmEmail.style.display = 'none';
            email.value = '';
        },5000)
    }
    if(comentarios === ""){
        confirmText.style.display = 'block';
        confirmText.style.color = 'red';
        confirmText.innerHTML = 'Introduce tus Comentarios, por favor.';

        setTimeout(function () {
            confirmText.style.display = 'none';
            comentario.value = '';
        },5000)
    }
    if(nombres != "" && emails != "" && emailCorrecto && comentarios != "") {
        confirmForm.style.display = 'block';
        confirmForm.style.color = '#00ff00';
        confirmForm.innerHTML = 'Comentario enviado';

        setTimeout(function () {
            confirmForm.style.display = 'none';
						
            nombre.value = '';
            email.value = '';
            comentario.value = '';
            emailCorrecto = false;
        },5000)
    }
}
