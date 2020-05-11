import $ from 'jquery';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faCheck);
library.add(faArrowUp);
library.add(faBars);
library.add(faTools);
library.add(faHome);
library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faHtml5);
library.add(faJsSquare);
library.add(faCss3Alt);
library.add(faEnvelope);
dom.watch();

// Funcionalidad botón hamburgesa
setTimeout(function () {

    const movil = window.matchMedia('screen and (min-width: 100px) and (max-width: 730px)');
    const boton = document.querySelector('#boton-menu');
    const menu = document.querySelector('.menu');

    movil.addListener(validation);

    function validation(event){
        if(event.matches){
            boton.addEventListener('click', mostrarOcultarMenu);
            boton.addEventListener('keydown', function(event){
                let codigo = event.which || event.keyCode;
                console.log(codigo);
                if(codigo === 13) {
                    mostrarOcultarMenu();
                };
            });
        }else{
            boton.removeEventListener('click', mostrarOcultarMenu)
        }
    }

    validation(movil);

    function mostrarOcultarMenu(){
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active');
        }else{
            menu.classList.add('is-active');
        }
    }

},100)


// Funcionalidad confirmación envío Formulario Subscripción
setTimeout(function () {
    let subscribe = document.getElementById('subscribe');
    let subscribirme = document.getElementById('subscribirme');
    let confirma = document.getElementById('confirma');

    subscribirme.addEventListener('click', confirmarEnvio);


    function confirmarEnvio(event) {
        event.preventDefault();
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
},10)



// Funcionalidad confirmación envío Formulario Comentario
setTimeout(function () {
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let comentario = document.getElementById('comentario');
    let submit = document.getElementById('submit');
    let confirmNombre = document.getElementById('confirmNombre');
    let confirmEmail = document.getElementById('confirmEmail');
    let confirmText = document.getElementById('confirmText');
    let confirmForm = document.getElementById('confirmForm');
    let emailCorrecto = false;

    submit.addEventListener('click',confirmEnvio);


    function confirmEnvio(event) {
        event.preventDefault();
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
},10)


$(document).ready(function () {

    // Mostrar y ocultar el botón "Volver arriba"

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function () {

        var mainOffsetTop = $('#main').offset().top;

        if ($(window).scrollTop() > mainOffsetTop) {

            btnVolverArriba.css('margin-right', 0);

        }else if ($(window).scrollTop() <= mainOffsetTop){

            btnVolverArriba.css('margin-right', '-60px');

        }

    })

    // Movimiento suave de scroll de "Inicio" y "Volver arriba"

    $('a.volver-arriba').on('click', function (e) {
        e.preventDefault();

        var seccionOffsetTop = $('#main').offset().top

        if($(window).scrollTop() != 0) {

            $('html, body').stop().animate({scrollTop: seccionOffsetTop - 85}, 1000);
        }
    })

    btnVolverArriba.on('keydown', function(event){
        String.fromCharCode(event.which);
        if(event.which === 13) {
            var seccionOffsetTop = $('#main').offset().top

            if($(window).scrollTop() != 0) {

                $('html, body').stop().animate({scrollTop: seccionOffsetTop - 85}, 1000);
            }

        };
    });

    // Efecto slider del header
    // Seleccionando elementos en variables
    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    // Se pasa el último slide al primer lugar
    $('#slider .slide:last').insertBefore('#slider .slide:first');

    // con margen negativo se vuelve a mostrar el primer slider
    slider.css('margin-left', '-100%');

    // Función para que el slide se mueva a la derecha
    function moverDerecha() {
        if(!slider.is(':animated')) {
            slider.animate({
                marginLeft: '-200%'
            }, 1000, function () {
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left', '-100%');
                resetInterval();
            });
        }
    }

    btnSiguiente.on('click', moverDerecha);

    btnSiguiente.on('keydown', function(event){
        String.fromCharCode(event.which);
        if(event.which === 13) {
            moverDerecha();
        };
    });

    // Función para que el slide se mueva a la izquierda
    function moverIzquierda() {
        if(!slider.is(':animated')) {
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left', '-200%');
            slider.animate({
                marginLeft: '-100%'
            }, 1000, function () {
                resetInterval();
            });
        }
    }

    btnAnterior.on('click', moverIzquierda);

    btnAnterior.on('keydown', function(event){
        String.fromCharCode(event.which);
        if(event.which === 13) {
            moverIzquierda();
        };
    });

    // Intervalo para que el slide se mueva automáticamente
    var intervalo = setInterval(moverDerecha, 5000);

    function resetInterval() {
        clearInterval(intervalo);
        intervalo = setInterval(moverDerecha, 5000);
    }

});

