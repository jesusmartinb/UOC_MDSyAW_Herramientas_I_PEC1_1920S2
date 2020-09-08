import $ from 'jquery';

$(document).ready(function () {

    var btnVolverArriba = $('#btnVolverArriba');

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
})