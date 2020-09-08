import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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

let movil = window.matchMedia('screen and (min-width: 100px) and (max-width: 730px)');

if(movil.matches){
    document.addEventListener('DOMContentLoaded', () =>{
        import('./simatches')
            .then(f => {
                f.simatches(movil);
            });
    })
}

setTimeout(function () {

    // Funcionalidad confirmación envío Formulario Subscripción

    let subscribirme = document.getElementById('subscribirme');

    subscribirme.addEventListener('click', (event) => {
        import('./subscription')
            .then(f => {
                f.confirmarEnvio(event);
            });
    });

    // Funcionalidad confirmación envío Formulario Comentario

    let submit = document.getElementById('submit');

    submit.addEventListener('click', (event) => {
        import('./coment')
            .then(f => {
                f.confirmEnvio(event);
            });
    });

},0);