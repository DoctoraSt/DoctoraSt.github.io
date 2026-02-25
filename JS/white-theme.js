document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener los botones por su clase
    const btnClaro = document.querySelector('.idButtonWhite');
    const btnOscuro = document.querySelector('.idButtonDark'); // Asegúrate que tenga esta clase
    
    // Evento para cambiar a tema claro (fondo blanco)
    if (btnClaro) {
        btnClaro.addEventListener('click', function() {
            document.body.classList.add('fondo-blanco');
        });
    }
    
    // Evento para volver al tema oscuro (default)
    if (btnOscuro) {
        btnOscuro.addEventListener('click', function() {
            document.body.classList.remove('fondo-blanco');
        });
    }
    
});