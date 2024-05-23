import React from 'react';
import styled from 'styled-components';

const ProjetosContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Card = styled.div`
  width: 306px;
  background-color: #f5f5f5ff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.div`
  width: 100%;
  height: 183px;
  background-color: #d9d9d9ff;
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled.h3`
  font-family: 'TTSupermolot-Bold';
  font-size: 32px;
  color: #292929ff;
  margin: 10px 0;
`;

const CardSubtitle = styled.p`
  font-family: 'TTSupermolot-Bold';
  font-size: 14px;
  color: #ed177dff;
  margin: 10px 0;
`;

const CardContent = styled.p`
  font-family: 'Roboto Flex';
  font-weight: 300;
  font-size: 16px;
  color: #292929ff;
  line-height: 1.5;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #201f53ff;
  color: #ffffff;
  font-family: 'TTSupermolot-Bold';
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #1d1b4fff;
  }
`;

const Projetos = () => {
    return (
        <ProjetosContainer>
            <h1>Meus Projetos</h1>
            <h2>Projetos</h2>
            <Cards>
                <Card>
                    <CardImage style={{ backgroundImage: `url('src/Componentes/Projetos/Imagens/imagem-calculadora.png')` }} />
                    <CardTitle>Calculadora</CardTitle>
                    <CardSubtitle>REACT, CSS, JAVASCRIPT</CardSubtitle>
                    <CardContent>Um projeto de React com JavaScript realizado durante a minha apresentação sobre o React.</CardContent>
                    <a href="https://calculadora-react-nine-dusky.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url('src/Componentes/Projetos/Imagens/imagem-weather-app.png')` }} />
                    <CardTitle>Front-end Weather App</CardTitle>
                    <CardSubtitle>React, CSS, JAVASCRIPT</CardSubtitle>
                    <CardContent>Projeto de Front-end do desafio final da Formação Academia que o objetivo foi criar a tela para o cadastro da Previsão do Tempo.</CardContent>
                    <a href="https://front-end-weather-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url('src/Componentes/Projetos/Imagens/imagem-back-end-weather-app.png')` }} />
                    <CardTitle>Back-end Weather-App</CardTitle>
                    <CardSubtitle>JAVA, SPRING BOOT, MYSQL</CardSubtitle>
                    <CardContent>Projeto de Back-end do desafio final da Formação Academia que o objetivo foi criar um Crud, acrônimo de Create, Read, Update e Delete sobre a previsão do tempo</CardContent>
                    <a href="https://github.com/pedrorosinha/back-end-weather-app" target="_blank" rel="noopener noreferrer">
                    <Button>Acessar</Button>
                    </a>
                </Card>
            </Cards>
        </ProjetosContainer>
    );
}

export default Projetos;