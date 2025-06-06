import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: ${({ theme }) => theme.cores.branco};
`;

const Titulo = styled.h3`
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin: 5px 0;
`;

const Botao = styled.button`
  background-color: #86425e;
  color: ${({ theme }) => theme.cores.branco};
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-weight: bold;
`;

function Vaga({ titulo, localizacao, tipo, nivel, salario, requisitos }) {
  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Info>Localização: {localizacao}</Info>
      <Info>Tipo: {tipo}</Info>
      <Info>Nível: {nivel}</Info>
      <Info>Salário: {salario}</Info>
      <Info>Requisitos: {requisitos}</Info>
      <Botao>Ver detalhes e candidatar-se</Botao>
    </Card>
  );
}

export default Vaga;
