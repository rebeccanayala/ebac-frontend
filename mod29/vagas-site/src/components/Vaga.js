import React from 'react';
import { Vaga as VagaStyled } from '../styles';

function Vaga({ titulo, local }) {
  return (
    <VagaStyled>
      <h3>{titulo}</h3>
      <p>{local}</p>
    </VagaStyled>
  );
}

export default Vaga;
