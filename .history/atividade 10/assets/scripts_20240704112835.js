const precos = {
    lombinho: 40,
    calabresa: 35,
    portuguesa: 45,
    camarao: 60
};

function comprar() {
    const pizzaSelecionada = document.getElementById('pizza').value;
    const valor = precos[pizzaSelecionada];
    let valorFinal = valor;

    if (valor > 50) {
        valorFinal = valor * 0.85;
    }

    document.getElementById('valor').value = `R$ ${valor.toFixed(2)}`;
    document.getElementById('valorFinal').value = `R$ ${valorFinal.toFixed(2)}`;
}