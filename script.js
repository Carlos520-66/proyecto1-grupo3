// Función principal
function procesarFormulario() {

    var nombre = document.getElementsByName("nombre")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var mensaje = document.getElementsByName("mensaje")[0].value;

    // Validación
    if (nombre === "" || correo === "" || mensaje === "") {
        mostrarRespuesta("⚠️ Completa todos los campos", "red");
        return;
    }

    // Longitud del mensaje (operador)
    var longitud = mensaje.length;

    var estadoMensaje = "";
    if (longitud < 10) {
        estadoMensaje = "Mensaje muy corto";
    } else if (longitud <= 50) {
        estadoMensaje = "Mensaje adecuado";
    } else {
        estadoMensaje = "Mensaje largo";
    }

    var saludo = generarSaludo(nombre);

    mostrarRespuesta(
        saludo + "<br>Correo: " + correo + "<br>" + estadoMensaje,
        "green"
    );
}


// Función secundaria
function generarSaludo(nombre) {
    return "Hola " + nombre + ", gracias por escribirnos 😊";
}


// Función para mostrar resultado (mejora visual)
function mostrarRespuesta(texto, color) {
    var respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = texto;
    respuesta.style.color = color;
    respuesta.style.fontSize = "20px";
    respuesta.style.marginTop = "15px";
}

// Variables del carrito 
var carrito = [];
var total = 0;


// Agregar productos
function agregarCarrito(nombre, precio) {

    // Guardar objeto
    carrito.push({
        nombre: nombre,
        precio: precio
    });

    // Sumar total
    total += precio;

    // Crear elemento lista
    var item = document.createElement("li");

    item.innerHTML =
        nombre + " - S/ " + precio +
        ' <button onclick="eliminarProducto(this,' + precio + ')">Eliminar</button>';

    // Mostrar producto
    document.getElementById("lista-carrito").appendChild(item);

    // Actualizar total
    document.getElementById("total").textContent = total;

    // Actualizar contador
    document.getElementById("contador").textContent = carrito.length;
}


// Eliminar producto
function eliminarProducto(boton, precio) {

    // Eliminar elemento HTML
    boton.parentElement.remove();

    // Restar total
    total -= precio;

    // Actualizar total
    document.getElementById("total").textContent = total;

    // Reducir contador
    carrito.pop();

    document.getElementById("contador").textContent = carrito.length;
}