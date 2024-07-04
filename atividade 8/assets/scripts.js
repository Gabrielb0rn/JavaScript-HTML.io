function calcularTotal() {
    let totalGeral = 0;
    let resultados = '';

    for (let i = 1; i <= 5; i++) {
        const nomeProjeto = document.getElementById(`nomeProjeto${i}`).value;
        const valorHora = parseFloat(document.getElementById(`valorHora${i}`).value) || 0;
        const quantidadeHoras = parseFloat(document.getElementById(`quantidadeHoras${i}`).value) || 0;
        const totalProjeto = valorHora * quantidadeHoras;

        if (nomeProjeto && valorHora && quantidadeHoras) {
            resultados += `<p class="result">Projeto ${i}: R$ ${totalProjeto.toFixed(2)}</p>`;
        }

        totalGeral += totalProjeto;
    }

    resultados += `<p class="result">Total Geral: R$ ${totalGeral.toFixed(2)}</p>`;
    document.getElementById('resultados').innerHTML = resultados;
}