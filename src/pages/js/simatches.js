export function simatches (m) {
    import('./hamburg')
        .then(f => {
            f.validation(m);
            m.addListener(validation());
        })
        .then(() => mostrarOcultarMenu());
}