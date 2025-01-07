// Obtenemos la función del botón
const botonSuma = document.getElementById('botonSuma');
const botonResta = document.getElementById('botonResta');
const respuestaInput = document.getElementById('respuesta');

// Damos al botón su funcionalidad - Suma
botonSuma.addEventListener('click', function () {
    realizarOperacion('suma');
});

// Damos al botón su funcionalidad - Resta
botonResta.addEventListener('click', function () {
    realizarOperacion('resta');
});

// Damos al botón su funcionalidad - Multiplicación
const botonMultiplicacion = document.getElementById('multiplicacion');
botonMultiplicacion.addEventListener('click', function () {
    realizarOperacion('ponNumero').innerHTML = 'x';
});

//Funcionalidad del botón división
const botonDivision = document.getElementById('division');
botonDivision.addEventListener('click', function(){
    document.getElementById('ponNumero').innerHTML = '/';
});

//Logica de botones de los numéros
const boton0 = document.getElementById('button0');
boton0.addEventListener('click', function() {
    document.getElementById('ponNumero').innerHTML = '0';
});

const boton1 = document.getElementById('button1');
boton1.addEventListener('click', function(){
    document.getElementById('ponNumero').innerHTML = '1';
});

//Usando accessChild
const newChild = document.createElement('p');
let childNodes = newChild.childNodes;
document.getElementById('button1');