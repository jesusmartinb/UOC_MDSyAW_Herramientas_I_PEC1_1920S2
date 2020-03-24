import '../css/style.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faCheck);
library.add(faBars);
library.add(faTools);
library.add(faHome);
library.add(faHtml5);
library.add(faJsSquare);
library.add(faCss3Alt);
dom.watch();

// Funcionalidad botón hamburgesa
setTimeout(function () {

    const movil = window.matchMedia('screen and (min-width: 100px) and (max-width: 723px)');
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

