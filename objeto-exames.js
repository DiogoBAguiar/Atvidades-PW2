class Exams {
    constructor(answer , weight){
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
        this._scores = null;
    }
    add(exam) {
        this.exams.push(exam);
        this._scores = null;
    }

    avg() {
        const scores = this._getALLScores();
        if (scores.length === 0) {
            return 0;
        }
        const sum = scores.reduce((total, score) => total + score, 0 );
        return sum/scores.length; 
    }
    min(count = 1){
        const scores = [...this._getALLScores()];
        scores.sort((a,b)=> a - b);
        return scores.slice(0,count)
    }
    max(count = 1){
        const scores = [...this._getALLScores()];
        scores.sort((a,b)=> b-a);
        return scores.slice(0,count)
    }
    lt(limit){
        const scores = this.getALLScores();
        return scores.filter(score => score < limit);
    }
    gt(limit){
        const scores = this.getALLScores();
        return scores.filter(score => score > limit);
    }
    _getALLScores() {
        if (this.score === null) {
            this._scores = this.exams.map(exams => this_calculateScore(exam));
        }
    }
    this_calculateScore(studentAnswers) {
        let score = 0;
        for (let i=0; i < this.onwer.length; i++){
            if (studentAnswers[i] === this.answer[i]){
                score += this.weight[i];
            }
        }
        return score;
    } 
}
console.log("-".repeat(50));
console.log("--- Sistema de Avaliação de Provas ---");
const gabarito = ['a', 'b', 'a', 'c', 'd'];
const pesos = [2, 2, 2, 2, 2];
const sistemaDeProvas = new Exams(gabarito, pesos);
const aluno1Respostas = ['a', 'b', 'b', 'b', 'b']; 
const aluno2Respostas = ['a', 'b', 'a', 'c', 'd']; 
const aluno3Respostas = ['d', 'c', 'b', 'a', 'a']; 
const aluno4Respostas = ['a', 'b', 'a', 'c', 'b']; 
sistemaDeProvas.add(aluno1Respostas);
sistemaDeProvas.add(aluno2Respostas);
sistemaDeProvas.add(aluno3Respostas);
sistemaDeProvas.add(aluno4Respostas);
console.log("\nNotas de todos os alunos:", sistemaDeProvas._getAllScores());
console.log("-".repeat(50));
console.log(`Média da turma: ${sistemaDeProvas.avg().toFixed(2)}`);
console.log("-".repeat(50));
console.log("A menor nota:", sistemaDeProvas.min());
console.log("As 2 menores notas:", sistemaDeProvas.min(2));
console.log("-".repeat(50));
console.log("A maior nota:", sistemaDeProvas.max());
console.log("As 2 maiores notas:", sistemaDeProvas.max(2));
console.log("-".repeat(50));
console.log("Notas maiores que 5:", sistemaDeProvas.gt(5));
console.log("Notas menores que 5:", sistemaDeProvas.lt(5));
console.log("-".repeat(50));