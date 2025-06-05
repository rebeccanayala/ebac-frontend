import React from 'react';
import { Formulario as FormStyled } from '../styles';

function Formulario({ busca, setBusca, filtro, setFiltro }) {
  return (
    <FormStyled>
      <h2>Filtrar Vagas</h2>
      <input
        type="text"
        placeholder="Digite a vaga"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <select
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option>Todos</option>
        <option>Remoto</option>
        <option>Presencial</option>
      </select>
    </FormStyled>
  );
}

export default Formulario;

