class OperacoesVetor {
    constructor(vetor){
        this.vetor = vetor
    }
    sum() {
        return this.vetor.reduce((acumulador , valorAtual) => acumulador + valorAtual, 0);
    }
    sumOdds() {
        const numerosImpares = this.vetor.filter(numero => numero % 2 !==0);
        return numerosImpares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    }
    product() {
        return this.vetor.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
    }
}
console.log("-".repeat(50));
console.log("--- Testes com o vetor [1, 2, 3] ---");
const vetor1 = new OperacoesVetor([1, 2, 3]);
console.log(`Soma: ${vetor1.sum()}`); 
console.log(`Soma de Ímpares: ${vetor1.sumOdds()}`); 
console.log(`Produto: ${vetor1.product()}`); 
console.log("\n");

console.log("-".repeat(50));
console.log("--- Testes com o vetor [2, 2, 2] ---");
const vetor2 = new OperacoesVetor([2, 2, 2]);
console.log(`Soma: ${vetor2.sum()}`); 
console.log(`Soma de Ímpares: ${vetor2.sumOdds()}`); 
console.log(`Produtoproduto: ${vetor2.product()}`); 
console.log("\n");

console.log("-".repeat(50));
console.log("--- Testes com o vetor [1, 2, 3, 4, 5, 6] ---");
const vetor3 = new OperacoesVetor([1, 2, 3, 4, 5, 6]);
console.log(`Soma: ${vetor3.sum()}`); 
console.log(`Soma de Ímpares: ${vetor3.sumOdds()}`); 
console.log(`Produtoproduto: ${vetor3.product()}`); 
console.log("\n");
