document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensaje = this.querySelector('textarea').value;
    
    if (nombre && email && mensaje) {
        alert('¡Mensaje enviado correctamente!');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos');
    }
});