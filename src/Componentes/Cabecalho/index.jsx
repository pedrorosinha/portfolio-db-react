import styled from "styled-components";
import logo from '/src/assets/logo-db.svg';
import EmailIcon from '/src/assets/Icones/icone-email.svg';
import GithubIcon from '/src/assets/Icones/icone-github.svg';
import LinkedinIcon from '/src/assets/Icones/icone-linkedin.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Navbar = styled.div`
  width: 100%;
  background: #bee7f9;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 87px;
  height: 60px;
  margin-right: 32px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-family: 'TTSupermolot-Bold';
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #201f53;
  margin: 0 16px;
  cursor: pointer;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 8px;
`;

const Cabecalho = () => {
  return (
    <>
      <Container>
        <Navbar>
          <NavGroup>
            <a href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
            <LogoImage src={logo} />
            </a>
            <NavButton>Sobre</NavButton>
            <NavButton>Currículo</NavButton>
            <NavButton>Projetos</NavButton>
          </NavGroup>
          <IconGroup>
            <a href="mailto:pedro.rosinha@db.tec.br" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <img src={EmailIcon} alt="Email" />
            </IconButton>
            </a>
            <a href="https://github.com/pedrorosinha" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <img src={GithubIcon} alt="Github" />
            </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/pedro-felipe-paulino-rosinha-792388228/" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <img src={LinkedinIcon} alt="Linkedin"/>
            </IconButton>
            </a>
          </IconGroup>
        </Navbar>
      </Container>
    </>
  );
}

export default Cabecalho;