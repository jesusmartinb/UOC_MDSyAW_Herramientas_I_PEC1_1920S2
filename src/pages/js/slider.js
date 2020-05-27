import $ from 'jquery';

$(document).ready(function () {

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
