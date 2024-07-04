function calcularMedia(conforto, economia, design) {
    return (conforto + economia + design) / 3;
}

function comparar() {
    const carro1Conforto = parseFloat(document.getElementById('carro1-conforto').value) || 0;
    const carro1Economia = parseFloat(document.getElementById('carro1-economia').value) || 0;
    const carro1Design = parseFloat(document.getElementById('carro1-design').value) || 0;
    const carro1Media = calcularMedia(carro1Conforto, carro1Economia, carro1Design);
    document.getElementById('carro1-media').value = carro1Media.toFixed(2);

    const carro2Conforto = parseFloat(document.getElementById('carro2-conforto').value) || 0;
    const carro2Economia = parseFloat(document.getElementById('carro2-economia').value) || 0;
    const carro2Design = parseFloat(document.getElementById('carro2-design').value) || 0;
    const carro2Media = calcularMedia(carro2Conforto, carro2Economia, carro2Design);
    document.getElementById('carro2-media').value = carro2Media.toFixed(2);

    const carro3Conforto = parseFloat(document.getElementById('carro3-conforto').value) || 0;
    const carro3Economia = parseFloat(document.getElementById('carro3-economia').value) || 0;
    const carro3Design = parseFloat(document.getElementById('carro3-design').value) || 0;
    const carro3Media = calcularMedia(carro3Conforto, carro3Economia, carro3Design);
    document.getElementById('carro3-media').value = carro3Media.toFixed(2);

    let melhorCarro = '';
    let maiorMedia = Math.max(carro1Media, carro2Media, carro3Media);

    if (maiorMedia === carro1Media) {
        melhorCarro = 'Carro 1';
    } else if (maiorMedia === carro2Media) {
        melhorCarro = 'Carro 2';
    } else if (maiorMedia === carro3Media) {
        melhorCarro = 'Carro 3';
    }

    document.getElementById('melhor-carro').textContent = melhorCarro;
}
