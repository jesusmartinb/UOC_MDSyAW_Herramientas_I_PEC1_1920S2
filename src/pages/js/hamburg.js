export function validation(event){
    const boton = document.querySelector('#boton-menu');
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
export function mostrarOcultarMenu(){
    const menu = document.querySelector('.menu');
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active');
    }
}