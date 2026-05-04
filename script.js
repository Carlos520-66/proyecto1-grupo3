// Función principal
function procesarFormulario() {

    // Capturar datos
    var nombre = document.getElementsByName("nombre")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var mensaje = document.getElementsByName("mensaje")[0].value;

    // Validación (CONDICIONAL)
    if (nombre === "" || correo === "" || mensaje === "") {
        document.getElementById("respuesta").innerHTML = "Por favor completa todos los campos";
        return;
    }

    // Operador (longitud del mensaje)
    var longitud = mensaje.length;

    // Condicional
    var estadoMensaje = "";
    if (longitud < 10) {
        estadoMensaje = "Mensaje muy corto";
    } else if (longitud <= 50) {
        estadoMensaje = "Mensaje aceptable";
    } else {
        estadoMensaje = "Mensaje largo";
    }

    // Función adicional
    var saludo = generarSaludo(nombre);

    // Mostrar resultado
    document.getElementById("respuesta").innerHTML =
        saludo + "<br>" +
        "Correo: " + correo + "<br>" +
        "Estado del mensaje: " + estadoMensaje;
}


// Función extra
function generarSaludo(nombre) {
    return "Hola " + nombre + ", gracias por contactarnos.";
}