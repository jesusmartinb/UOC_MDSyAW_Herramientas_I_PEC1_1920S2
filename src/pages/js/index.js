import '../css/style.css';

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
    //btnSiguiente.on('touch', moverDerecha);


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
    //btnAnterior.on('touch', moverIzquierda);

    // Intervalo para que el slide se mueva automáticamente
    var intervalo = setInterval(moverDerecha, 5000);

    function resetInterval() {
        clearInterval(intervalo);
        intervalo = setInterval(moverDerecha, 5000);
    }

});

