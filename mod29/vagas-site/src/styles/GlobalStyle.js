import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.cores.fundo};
    font-family: 'Segoe UI', sans-serif;
    color: ${({ theme }) => theme.cores.texto};
}


  button {
    cursor: pointer;
  }
`;

