"use strict";

var alunos = [{
  nome: "João",
  nota: 7
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Pedro",
  nota: 8
}, {
  nome: "Ana",
  nota: 4
}, {
  nome: "Lucas",
  nota: 6
}];
function filtrarAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);