function mostrarResultado() {
    const perguntaX = parseInt(document.getElementById('pergunta-x').value);
    const perguntaY = parseInt(document.getElementById('pergunta-y').value);
    const perguntaZ = parseInt(document.getElementById('pergunta-z').value);
    const resultado = perguntaX + perguntaY + perguntaZ;

    const outputOption = document.querySelector('input[name="output"]:checked').value;
    const showResult = document.getElementById('show-result').checked;

    if (showResult) {
        document.getElementById('resultado').classList.remove('hidden');

        if (outputOption === 'alert') {
            alert('Resultado: ' + resultado);
        } else if (outputOption === 'input') {
            document.getElementById('resultado-input').value = resultado;
        } else if (outputOption === 'div') {
            document.getElementById('resultado-div').textContent = 'Resultado: ' + resultado;
        }
    } else {
        document.getElementById('resultado').classList.add('hidden');
    }
}
