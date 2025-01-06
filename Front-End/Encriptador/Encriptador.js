//Variables para seleccionar el contenido de las áreas específicas
const textarea = document.querySelector(".text-area");

//".mensaje" es el recuadro donde aparece el texto encriptado / desencriptado
const mensaje = document.querySelector(".mensaje");

//Botón de encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

//Encripta el contenido
function encriptar(stringEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return(stringEncriptar)
}

//Botón para desencriptar
function btnDesencriptar(){
    const textoEncriptado = Desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage ="none";
}

//Desencripta lo escrito
function Desencriptar(stringDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return (stringDesencriptar)
}

//Función para copiar
function btnCopiar(){
    document.getElementById('btnCopiar').addEventListener('click', function () {
        const texto = document.getElementById('texto').value;
        if (texto.trim() !== '') {
            navigator.clipboard.writeText(texto)
                .then(() => {
                    alert('Texto copiado al portapapeles');
                })
                .catch(err => {
                    console.error('Error al copiar al portapapeles:', err);
                });
        } else {
            alert('El campo de texto está vacío. Por favor, escribe algo para copiar.');
        }
    });
}