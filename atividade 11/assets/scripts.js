document.getElementById('traduzir').addEventListener('click', function() {
    const select = document.getElementById('numero');
    const selectedOption = select.options[select.selectedIndex].value;

    if (selectedOption) {
        document.getElementById('resultado').innerText = traduzirNumero(selectedOption);
        document.getElementById('mensagem').innerText = '';
    } else {
        document.getElementById('mensagem').innerText = 'Nenhuma opção escolhida!';
    }
});

function traduzirNumero(numero) {
    const traducoes = {
        one: 'Um',
        two: 'Dois',
        three: 'Três',
        four: 'Quatro',
        five: 'Cinco'
    };

    return traducoes[numero] || '';
}
