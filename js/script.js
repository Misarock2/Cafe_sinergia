

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formularioReserva");

    if (formulario){
        formulario.addEventListener("submit", function(e) {

        e.preventDefault();

        // Capturar datos
        const nombre = document.querySelector('input[name="nombre"]').value;
        const documento = document.querySelector('input[name="documento"]').value;
        const telefono = document.querySelector('input[name="telefono"]').value;
        const profesion = document.querySelector('input[name="profesion"]').value;
        const mentoria = document.querySelector('select[name="mentoria"]').value;
        const membresia = document.querySelector('input[name="membresia"]:checked').value;

        // TU NÚMERO DE WHATSAPP
        const numeroWhatsApp = "573172741751";

        // Mensaje
        const mensaje = `
     *NUEVA RESERVA - CAFÉ SINERGIA*

         Nombre: ${nombre}
         Documento: ${documento}
         Teléfono: ${telefono}
         Profesión: ${profesion}
         Mentoría: ${mentoria}
         Membresía: ${membresia}
        `.trim();
        
           
        // Codificar texto
        const mensajeCodificado = encodeURIComponent(mensaje);
             console.log("mensaje real:",mensajeCodificado);
        // URL WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        // Abrir WhatsApp
        window.open(url, "_blank");
    });
    }

    

});