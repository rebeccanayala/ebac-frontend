function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudar(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(10, 5);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const saudacao = saudar("Rebecca");
console.log(saudacao);
