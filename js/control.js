function enviarAWhatsApp() {

  const urlWhatsApp = `https://api.whatsapp.com/send/?phone=573172741751&text&type=phone_number&app_absent=0`;

  window.open(urlWhatsApp, '_blank');

}




const buscador = document.getElementById('buscador');

if(buscador){
    // 1. Usamos tu clase exacta: "card-producto"
    const productos = document.querySelectorAll('.card-producto');
    
    buscador.addEventListener('keyup', (evento) => {
      const textoUsuario = evento.target.value.toLowerCase();
    
      productos.forEach(producto => {
        // 2. Buscamos el <h3> que se ve claramente en tu foto
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
    
        // 3. Si coincide lo dejamos, si no, le ponemos d-none de Bootstrap
        if (nombre.includes(textoUsuario)) {
          producto.classList.remove('d-none');
        } else {
          producto.classList.add('d-none');
        }
      });
    });
}

if(typeof emailjs !== 'undefined'){

// INICIALIZAR EMAILJS

emailjs.init({
  publicKey: "z1TQFx4am33VVHTsk",
});

// BOTÓN
document.getElementById("btnEnviarCorreo").addEventListener("click", function () {

    // CAPTURAR DATOS
    const nombre = document.getElementById("nombreUsuario").value;
    const correo = document.getElementById("correoUsuario").value;
    const telefono = document.getElementById("telefonoUsuario").value;
    const mensaje = document.getElementById("exampleFormControlTextarea1").value;

    // VALIDACIÓN SIMPLE
    if (
      nombre === "" ||
      correo === "" ||
      telefono === "" ||
      mensaje === ""
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    // DATOS PARA EMAILJS
    const templateParams = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      mensaje: mensaje
    };


    // ENVIAR CORREO
    emailjs
      .send(
        "service_azvtjhh",
        "template_d0m451c",
        templateParams
      )
      .then(function () {

        alert("Mensaje enviado correctamente ✅");

        // LIMPIAR CAMPOS
        document.getElementById("nombreUsuario").value = "";
        document.getElementById("correoUsuario").value = "";
        document.getElementById("telefonoUsuario").value = "";
        document.getElementById("exampleFormControlTextarea1").value = "";

      })
      .catch(function (error) {

        console.error("ERROR:", error);

        alert("No se pudo enviar el mensaje ❌");

      });

});

}



