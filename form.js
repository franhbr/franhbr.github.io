function confirmacion() {
    var respuesta = confirm("¿Quieres enviar el mensaje?");
    var respuesta2 = alert("El mensaje ha sido enviado con exito")
    if (respuesta == true) {
      return respuesta2;
    } else {
      return false;
    }
  }