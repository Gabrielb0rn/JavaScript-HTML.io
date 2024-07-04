function verificar() {
    for (let i = 1; i <= 5; i++) {
        const numero = document.getElementById(`numero${i}`).value;
        const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
        document.getElementById(`resultado${i}`).value = resultado;
    }
}