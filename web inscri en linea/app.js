document.getElementById('inscripcionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombrePadre = document.getElementById('nombrePadre').value;
    const telefono = document.getElementById('telefono').value;
    const nombreHijo = document.getElementById('nombreHijo').value;
    const edad = document.getElementById('edad').value;
    const escuela = document.getElementById('escuela').value;

    const response = await fetch('/api/inscripciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombrePadre, telefono, nombreHijo, edad, escuela })
    });

    if (response.ok) {
        alert('Inscripción realizada correctamente');
        cargarInscripciones();
    } else {
        alert('Error al realizar la inscripción');
    }
});

async function cargarInscripciones() {
    const response = await fetch('/api/inscripciones');
    const inscripciones = await response.json();
    const lista = document.getElementById('inscripcionesList');
    lista.innerHTML = inscripciones.map(i => `
        <li>
            <strong>${i.nombreHijo}</strong> (${i.edad} años) - ${i.escuela}<br>
            Padre/Madre: ${i.nombrePadre} - Tel: ${i.telefono}
        </li>
    `).join('');
}

cargarInscripciones();