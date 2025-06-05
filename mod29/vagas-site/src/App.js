import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Formulario from './components/Formulario';
import ListaVagas from './components/ListaVagas';

function App() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  return (
    <div>
      <Header />
      <Hero />
      <Formulario
        busca={busca}
        setBusca={setBusca}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <ListaVagas
        busca={busca}
        filtro={filtro}
      />
    </div>
  );
}

export default App;



