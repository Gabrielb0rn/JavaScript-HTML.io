function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);var nota2 = parseFloat(document.getElementById("nota2").value);var nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas.");
        return;
    }
    var media = (nota1 + nota2 + nota3) / 3;
    var resultado = media >= 7 ? "Aprovado" : "Reprovado";
    alert("A média é: " + media.toFixed(2) + "\n" + resultado);
}
