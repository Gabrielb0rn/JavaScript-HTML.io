function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    
    const imc = peso / (altura * altura);
    document.getElementById('imc').value = imc.toFixed(2);

    let resultado;
    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc < 24.9) {
        resultado = "Peso normal";
    } else if (imc < 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }
    document.getElementById('resultado').value = resultado;
}
