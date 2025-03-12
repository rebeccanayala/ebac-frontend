import React, { useState } from "react";
import "./App.css"; // Importando o CSS

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Convertendo cm para metros
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau 1";
    else if (imc < 39.9) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";

    setResultado(`Seu IMC é ${imc} (${classificacao})`);
  };

  return (
    <div className="container">
      <h2>Calculadora de IMC</h2>
      <div>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      <h3>{resultado}</h3>
    </div>
  );
}

export default App;

