import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Campo = styled.input`
  width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
`;

const Botao = styled.button`
  background-color: #86425e;
  color: ${({ theme }) => theme.cores.branco};
  border: none;
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.cores.primaria};
  }
`;


function Formulario({ aoBuscar }) {
  const [termoBusca, setTermoBusca] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();
    aoBuscar(termoBusca);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Campo
        type="text"
        placeholder="Front-end, fullstack, node, design"
        value={termoBusca}
        onChange={(evento) => setTermoBusca(evento.target.value)}
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  );
}

export default Formulario;
