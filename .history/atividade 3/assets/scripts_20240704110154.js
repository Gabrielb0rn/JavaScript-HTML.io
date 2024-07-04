function alterarEstrutura(acao) {
    var estrutura = parseInt(document.getElementById("estrutura").value);
    var destruir = parseInt(document.getElementById("destruir").value) || 0;
    var construir = parseInt(document.getElementById("construir").value) || 0;

    if (acao === 'destruir') {
        estrutura -= destruir;
    } else if (acao === 'construir') {
        estrutura += construir;
    }

    // Atualiza a estrutura e a situação da torre
    document.getElementById("estrutura").value = estrutura;

    if (estrutura > 0) {
        document.getElementById("situacao").value = "ATIVA";
        document.getElementById("situacao").style.color = "green";
    } else {
        document.getElementById("situacao").value = "DESTRUÍDA";
        document.getElementById("situacao").style.color = "red";
    }
}
