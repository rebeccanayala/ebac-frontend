import styled from 'styled-components';
import Vaga from './Vaga';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const todasVagas = [
  {
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Remoto',
    tipo: 'PJ',
    nivel: 'Júnior',
    salario: 'R$ 3.000 - 5.000',
    requisitos: 'HTML, CSS, JavaScript, React'
  },
  {
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'Remoto',
    tipo: 'CLT',
    nivel: 'Pleno',
    salario: 'R$ 6.000 - 9.000',
    requisitos: 'Node.js, Express, MongoDB'
  },
  {
    titulo: 'Desenvolvedor Fullstack',
    localizacao: 'Remoto',
    tipo: 'CLT',
    nivel: 'Sênior',
    salario: 'R$ 10.000 - 12.000',
    requisitos: 'React, Node.js, AWS'
  },
  // pode adicionar mais
];

function ListaVagas({ busca }) {
  const vagasFiltradas = todasVagas.filter(
    (vaga) =>
      vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      vaga.requisitos.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container>
      {vagasFiltradas.map((vaga, index) => (
        <Vaga
          key={index}
          titulo={vaga.titulo}
          localizacao={vaga.localizacao}
          tipo={vaga.tipo}
          nivel={vaga.nivel}
          salario={vaga.salario}
          requisitos={vaga.requisitos}
        />
      ))}
    </Container>
  );
}

export default ListaVagas;
