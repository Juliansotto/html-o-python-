document.getElementById('tramiteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const tipo = document.getElementById('tipo').value;
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;

    const response = await fetch('/api/tramites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, nombre, fecha })
    });

    if (response.ok) {
        alert('Trámite agendado correctamente');
        cargarTramites();
    } else {
        alert('Error al agendar el trámite');
    }
});

async function cargarTramites() {
    const response = await fetch('/api/tramites');
    const tramites = await response.json();
    const lista = document.getElementById('tramitesList');
    lista.innerHTML = tramites.map(t => `
        <li>
            <strong>${t.tipo}</strong>: ${t.nombre} - ${new Date(t.fecha).toLocaleDateString()}
        </li>
    `).join('');
}

cargarTramites();