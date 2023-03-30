// Funciones con parámetros nombrados
function customFont({ color, size, weight }) {
    const divTexto = document.createElement('p');
    divTexto.innerText = `Un texto a modificar`

    divTexto.style.color = color || '#00746A';
    divTexto.style.fontSize = size || '16px';
    divTexto.style.fontWeight = weight || 500;

    document.body.appendChild(divTexto);
}

customFont({ weight: 800 });