import styled from "styled-components";
import fotoPedroFelipe from "/src/assets/foto-felipe.jpg";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const SideSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MainSection = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Roboto Flex", sans-serif;
  font-size: 80px;
  font-weight: 700;
  color: #292929;
  margin-left: 124px;
`;

const NameSubtitle = styled.h2`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 124px;
`;

const JobSubtitle = styled.h2`
  font-family: 'TTSupermolot-Regular';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 120px;
`;

const SectionTitle = styled.h3`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 121px;
  `;

const Description = styled.p`
    font-family: "Roboto Flex", sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #292929;
    width: 360px;
    line-height: 18.75px;
    margin-left: 121px;
  `;

const Image = styled.img`
  width: 500px;
  height: 292px;
  top: 157px;
  left: 757px;
`;

const Titulo = () => {
    return (
        <Main>
            <SideSection>
                <NameSubtitle>Olá, meu nome é</NameSubtitle>
                <Title>Pedro Felipe</Title>
                <JobSubtitle>Sou desenvolvedor da formação da academia na equipe Ar da DB Server</JobSubtitle>
                <SectionTitle>Sobre mim</SectionTitle>
                <Description>Olá, meu nome é Pedro Felipe, tenho 18 anos, sou cadeirante e tenho paralisia cerebral. Moro em Porto Alegre/RS e estou no 1º semestre de Ciências da Computação na Unisinos, em Porto Alegre. Entrei na DB em fevereiro de 2024 como estagiário. Após três semanas estando com o pessoal do Starters Ar, fui para nova equipe, a formação da academia onde eu estou até hoje.</Description>
            </SideSection>
            <MainSection>
                <Image src={fotoPedroFelipe} />
            </MainSection>
        </Main>
    )
}

export default Titulo;