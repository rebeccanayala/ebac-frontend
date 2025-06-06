import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { tema } from './styles/tema';

import Header from './components/Header';
import Hero from './components/Hero';
import Formulario from './components/Formulario';
import ListaVagas from './components/ListaVagas';

function App() {
  const [busca, setBusca] = useState('');

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Formulario aoBuscar={setBusca} />
      <ListaVagas busca={busca} />
    </ThemeProvider>
  );
}

export default App;

