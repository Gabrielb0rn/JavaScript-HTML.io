function calcularMedia() {
    // Obtém os valores dos inputs
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    
    // Verifica se os valores são números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas.");
        return;
    }

    // Calcula a média
    var media = (nota1 + nota2 + nota3) / 3;

    // Determina se o aluno foi aprovado
    var resultado = media >= 7 ? "Aprovado" : "Reprovado";
    alert("A média é: " + media.toFixed(2) + "\n" + resultado);
}
