import styled from "styled-components";
import fotoPedroFelipe from "/src/assets/foto-felipe.jpg";
import ListSkills from '../Skills';
import breakpoints from "../../Styles/Breakpoint/breakpoint.jsx";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${breakpoints.bg} {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
`;

const SideSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media ${breakpoints.bg} {
    justify-content: center;
    align-items: center;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  @media ${breakpoints.bg} {
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Roboto Flex", sans-serif;
  font-size: 80px;
  font-weight: 700;
  color: #292929;
  margin-left: 124px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const NameSubtitle = styled.h2`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 124px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const JobSubtitle = styled.h2`
  font-family: 'TTSupermolot-Regular';
  display: flex;
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 120px;
  
  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 121px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #292929;
  width: 360px;
  line-height: 19px;
  margin-left: 121px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin-left: 116px;
  margin-right: 116px;
  padding-top: 15px;

  @media ${breakpoints.bg} {
    width: 100%;
    height: auto;
  }
`;

const Titulo = () => {
  return (
    <Main>
      <SideSection>
        <NameSubtitle>Olá, meu nome é</NameSubtitle>
        <Title>Pedro Felipe</Title>
        <JobSubtitle>Sou desenvolvedor full-stack</JobSubtitle>
        <SectionTitle>Sobre mim</SectionTitle>
        <Description>Olá, meu nome é Pedro Felipe, tenho 18 anos, sou cadeirante e tenho paralisia cerebral. Moro em Porto Alegre/RS e estou no 1º semestre de Ciências da Computação na Unisinos, em Porto Alegre. Entrei na DB em fevereiro de 2024 como estagiário. Após três semanas estando com o pessoal do Starters Ar, fui para nova equipe, a formação da academia onde eu estou até hoje.</Description>
      </SideSection>
      <MainSection>
        <Image src={fotoPedroFelipe} />
        <ListSkills />
      </MainSection>
    </Main>
  );
}

export default Titulo;
