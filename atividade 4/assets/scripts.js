function calcularDesconto() {
    var quantidade1 = parseInt(document.getElementById("quantidade1").value) || 0;
    var valor1 = parseFloat(document.getElementById("valor1").value) || 0;
    var quantidade2 = parseInt(document.getElementById("quantidade2").value) || 0;
    var valor2 = parseFloat(document.getElementById("valor2").value) || 0;
    var quantidade3 = parseInt(document.getElementById("quantidade3").value) || 0;
    var valor3 = parseFloat(document.getElementById("valor3").value) || 0;
    var quantidade4 = parseInt(document.getElementById("quantidade4").value) || 0;
    var valor4 = parseFloat(document.getElementById("valor4").value) || 0;
    var desconto = parseFloat(document.getElementById("desconto").value) || 0;

    var total = (quantidade1 * valor1) + (quantidade2 * valor2) + (quantidade3 * valor3) + (quantidade4 * valor4);
    var valorFinal = total - (total * (desconto / 100));

    document.getElementById("valorFinal").value = valorFinal.toFixed(2);
}
