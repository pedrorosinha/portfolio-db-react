import styled from "styled-components";
import fotoPedroFelipe from "/src/assets/foto-felipe.svg";

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
  font-family: 'Roboto-Flex';
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
    font-family: 'Roboto-Flex';
    font-size: 16px;
    font-weight: 300;
    color: #292929;
    width: 360px;
    line-height: 18.75px;
    margin-left: 121px;
  `;

const Image = styled.img`
  width: 567px;
  height: 292px;
  margin-top: 50px;
`;

const Titulo = () => {
    return (
        <Main>
            <SideSection>
                <NameSubtitle>Olá, meu nome é</NameSubtitle>
                <Title>Pedro Felipe</Title>
                <JobSubtitle>Sou desenvolvedor da formação da academia na equipe Ar da DB Server</JobSubtitle>
                <SectionTitle>Sobre mim</SectionTitle>
                <Description>Olá, meu nome é Pedro Felipe, tenho 18 anos</Description>
            </SideSection>
            <MainSection>
                <Image src={fotoPedroFelipe} />
            </MainSection>
        </Main>
    )
}

export default Titulo;