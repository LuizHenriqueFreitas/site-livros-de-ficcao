function EscondeCoisas() {
    window.location.href = 'autores-s-texto.html';
}

document.getElementById('esconde-texto').addEventListener('click', EscondeCoisas);

function MostraCoisas() {
    window.location.href = 'autores.html';
}

document.getElementById('mostra-texto').addEventListener('click', MostraCoisas);