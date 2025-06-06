import styled from 'styled-components';

const Cabecalho = styled.header`
  background-color: ${({ theme }) => theme.cores.fundo};
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.cores.texto};
`;

function Header() {
  return <Cabecalho>EBAC Jobs</Cabecalho>;
}

export default Header;

