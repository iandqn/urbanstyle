document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.querySelector('.whatsapp-button');

    // **IMPORTANTE:** Reemplaza 'YOURPHONENUMBER' con el número de teléfono real (incluyendo el código de país sin el signo '+')
    // Por ejemplo, si tu número es +34123456789, deberías poner '34123456789'
    const phoneNumber = '541127412175';
    const message = encodeURIComponent('Hola! Quiero más información y obtener mi bono');

    if (whatsappButton) {
        if (phoneNumber !== 'YOURPHONENUMBER') {
            whatsappButton.href = `https://wa.me/${phoneNumber}?text=${message}`;
        } else {
            console.warn('¡Advertencia! El número de teléfono de WhatsApp no ha sido configurado en script.js. El botón no funcionará correctamente.');
            // Opcional: Desactivar el botón si no hay número
            // whatsappButton.style.pointerEvents = 'none';
            // whatsappButton.title = 'Por favor, configura tu número de teléfono en script.js';
        }

        // Agrega el evento de click para el Pixel de Meta
        whatsappButton.addEventListener('click', () => {
            // Verifica que fbq esté disponible antes de usarlo
            if (typeof fbq === 'function') {
                fbq('track', 'Contact');
                console.log('Evento Contact de Meta Pixel disparado.');
            } else {
                console.warn('El Pixel de Meta no está cargado, el evento Contact no se disparó.');
            }
        });
    }

    // Pequeña animación para el botón al cargar la página (opcional)
    setTimeout(() => {
        if (whatsappButton) {
            whatsappButton.style.transform = 'scale(1)';
            whatsappButton.style.opacity = '1';
        }
    }, 500); // Retraso para que la animación sea visible
});
