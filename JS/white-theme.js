document.addEventListener('DOMContentLoaded', function() {
    
    const boton = document.getElementById('iDchangeColor');
    
    boton.addEventListener('click', function() {
        document.body.classList.toggle('fondo-blanco');
    });
    
});