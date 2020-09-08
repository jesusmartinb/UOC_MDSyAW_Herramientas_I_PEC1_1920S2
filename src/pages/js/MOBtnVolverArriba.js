import $ from 'jquery';

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
})