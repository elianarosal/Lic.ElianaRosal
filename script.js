function descargarRespuestas() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const experiencia = document.getElementById('experiencia').value;
  const mejora = document.getElementById('mejora').value;
  const autonomia = document.getElementById('autonomia').value;

  const contenido = 
    `Encuesta: El futuro de la Enfermería\n\n` +
    `Nombre: ${nombre}\n` +
    `Email: ${email}\n` +
    `Área de trabajo: ${experiencia}\n` +
    `Propuestas de mejora: ${mejora}\n` +
    `Autonomía profesional: ${autonomia}`;

  const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'respuestas_encuesta.txt';
  a.click();
  URL.revokeObjectURL(url);
}