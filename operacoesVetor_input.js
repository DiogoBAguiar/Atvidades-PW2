const readline = require('readline');

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
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(('Digite os numeros do vetor ,separados por espaços:'), (resposta) => {
    const stringsDeNumeros = resposta.split(' ');
    const vetorNumerico = stringsDeNumeros.map(str => parseInt(str)).filter(num => !isNaN(num));
      if (vetorNumerico.length > 0) {
    const operacoes = new OperacoesVetor(vetorNumerico);
    console.log("-".repeat(50));
    console.log(`Resultados para o vetor [${vetorNumerico.join(', ')}]`);
    console.log(`Soma: ${operacoes.sum()}`);
    console.log(`Soma de Ímpares: ${operacoes.sumOdds()}`);
    console.log(`Produto: ${operacoes.product()}`);
    console.log("-".repeat(50));
  } else {
    console.log("Entrada inválida. Por favor, digite apenas números separados por espaço.");
  }
  rl.close();
});