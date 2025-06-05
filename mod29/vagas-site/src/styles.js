import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2d412e;
  padding: 20px;
  color: white;
  text-align: center;
`;

export const Hero = styled.section`
  background-color: #355436;
  padding: 60px 20px;
  text-align: center;
  color: white;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 18px;
  }
`;

export const Formulario = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px auto;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;

  input, select {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 12px;
    padding: 10px;
    background-color: #61dafb;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Vaga = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);

  h3 {
    margin: 0;
    color: #333;
  }

  p {
    color: #666;
  }
`;

export const ListaVagas = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
