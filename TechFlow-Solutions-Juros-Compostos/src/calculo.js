function calcularJurosCompostos(capital, taxa, tempo){
    const montante = capital * ((taxa + 1) ** tempo);
    const juros = montante - capital;

    return juros;
}
module.exports = {calcularJurosCompostos};