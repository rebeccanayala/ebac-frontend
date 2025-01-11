<template>
  <div id="app">
    <h1>Calculadora Aritmética</h1>
    <div>
      <input type="number" v-model="number1" placeholder="Insira o primeiro número" />
      <input type="number" v-model="number2" placeholder="Insira o segundo número" />
      <select v-model="operation">
        <option value="add">Adição</option>
        <option value="subtract">Subtração</option>
        <option value="multiply">Multiplicação</option>
        <option value="divide">Divisão</option>
      </select>
    </div>
    <p>Resultado: {{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      operation: 'add',
    };
  },
  computed: {
    result() {
      const num1 = parseFloat(this.number1);
      const num2 = parseFloat(this.number2);
      switch (this.operation) {
        case 'add':
          return num1 + num2;
        case 'subtract':
          return num1 - num2;
        case 'multiply':
          return num1 * num2;
        case 'divide':
          return num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
        default:
          return 0;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
input, select {
  margin: 10px;
}
</style>
