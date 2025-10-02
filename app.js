async function cargarSeccion(seccion) {
  const contenedor = document.getElementById('contenido');

  if (seccion === 'materias') {
    const resp = await fetch('materias.json');
    const materias = await resp.json();

    contenedor.innerHTML = "<h2>Materias inscritas</h2><ul>" +
      materias.map(m => `<li>${m.nombre} - ${m.profesor}</li>`).join('') +
      "</ul>";
  } else {
    contenedor.innerHTML = `<h2>${seccion.charAt(0).toUpperCase() + seccion.slice(1)}</h2><p>Contenido dinámico de ${seccion}</p>`;
  }
}

// Registrar el service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Error en SW:", err));
}


