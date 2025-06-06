import styled from 'styled-components';
import heroImage from '../assets/hero-image.jpg'; // Coloque a imagem aqui em src/assets

const HeroSection = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  text-align: center;
  color: ${({ theme }) => theme.cores.branco};
`;

const HeroText = styled.h1`
  font-size: 32px;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  color: ${({ theme }) => theme.cores.branco};
`;


function Hero() {
  return (
    <HeroSection>
      <HeroText>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroText>
    </HeroSection>
  );
}

export default Hero;

