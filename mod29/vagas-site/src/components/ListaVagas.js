import React, { useState } from 'react';
import { ListaVagas as ListaStyled } from '../styles';
import Vaga from './Vaga';

function ListaVagas({ busca, filtro }) {
  const vagas = [
    { titulo: 'Desenvolvedor Front-End', local: 'Empresa XYZ - Remoto', tipo: 'Remoto' },
    { titulo: 'UI/UX Designer', local: 'Empresa ABC - Presencial', tipo: 'Presencial' },
    { titulo: 'Analista de Dados', local: 'Empresa DataTech - Remoto', tipo: 'Remoto' },
    { titulo: 'Suporte Técnico', local: 'Empresa SuporteMais - Presencial', tipo: 'Presencial' },
    { titulo: 'DevOps', local: 'Empresa CloudInc - Remoto', tipo: 'Remoto' }
  ];

  const vagasFiltradas = vagas.filter((vaga) => {
    const buscaTitulo = vaga.titulo.toLowerCase().includes(busca.toLowerCase());
    const filtroTipo = filtro === 'Todos' || vaga.tipo === filtro;
    return buscaTitulo && filtroTipo;
  });

  return (
    <ListaStyled>
      {vagasFiltradas.length > 0 ? (
        vagasFiltradas.map((vaga, index) => (
          <Vaga key={index} titulo={vaga.titulo} local={vaga.local} />
        ))
      ) : (
        <p>Nenhuma vaga encontrada 😢</p>
      )}
    </ListaStyled>
  );
}

export default ListaVagas;

