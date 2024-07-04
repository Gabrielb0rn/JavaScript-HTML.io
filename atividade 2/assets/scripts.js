function calcular(operacao) {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira ambos os valores.");
        return;
    }

    switch (operacao) {
        case 'soma':
            resultado = valor1 + valor2;
            break;
        case 'subtracao':
            resultado = valor1 - valor2;
            break;
        case 'multiplicacao':
            resultado = valor1 * valor2;
            break;
        case 'divisao':
            if (valor2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    abrirModal();
}

function abrirModal() {
    var modal = document.getElementById("resultadoModal");
    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById("resultadoModal");
    modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById("resultadoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
