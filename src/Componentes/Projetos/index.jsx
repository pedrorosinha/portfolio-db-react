import React from 'react';
import styled from 'styled-components';

import calculadoraImg from '../Projetos/Imagens/imagem-calculadora.png';
import weatherAppImg from '../Projetos/Imagens/imagem-weather-app.png';
import backEndWeatherAppImg from '../Projetos/Imagens/imagem-back-end-weather-app.png';
import crudPessoaEnderecoImg from '../Projetos/Imagens/imagem-crud-pessoa-endereco.png';
import apresentacaoSpringBootImg from '../Projetos/Imagens/imagem-capa-apresentacao-spring-boot.png';
import apresentacaoReactImg from '../Projetos/Imagens/imagem-capa-apresentacao-react.png';

const ProjetosContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 86px;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 124px;
`;

const Card = styled.div`
  width: 306px;
  flex: 0 1 calc(33.33% - 20px);
  max-width: 306px;
  background-color: #f5f5f5ff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
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
                    <CardImage style={{ backgroundImage: `url(${calculadoraImg})` }} />
                    <CardTitle>Calculadora</CardTitle>
                    <CardSubtitle>REACT, CSS, JAVASCRIPT</CardSubtitle>
                    <CardContent>Um projeto de React com JavaScript realizado durante a minha apresentação sobre o React.</CardContent>
                    <a href="https://calculadora-react-nine-dusky.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${weatherAppImg})` }} />
                    <CardTitle>Front-end Weather App</CardTitle>
                    <CardSubtitle>REACT, CSS, JAVASCRIPT</CardSubtitle>
                    <CardContent>Projeto de Front-end do desafio final da Formação Academia que o objetivo foi criar a tela para o cadastro da Previsão do Tempo.</CardContent>
                    <a href="https://front-end-weather-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${backEndWeatherAppImg})` }} />
                    <CardTitle>Back-end Weather-App</CardTitle>
                    <CardSubtitle>JAVA, SPRING BOOT, MYSQL</CardSubtitle>
                    <CardContent>Projeto de Back-end do desafio final da Formação Academia que o objetivo foi criar um Crud, acrônimo de Create, Read, Update e Delete sobre a previsão do tempo</CardContent>
                    <a href="https://github.com/pedrorosinha/back-end-weather-app" target="_blank" rel="noopener noreferrer">
                        <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${crudPessoaEnderecoImg})` }} />
                    <CardTitle>CRUD Pessoa e Endereço</CardTitle>
                    <CardSubtitle>JAVA, SPRING BOOT, MYSQL</CardSubtitle>
                    <CardContent>Primeiro projeto de Back-end na DB que o objetivo foi criar um Crud, acrônimo de Create, Read, Update e Delete relacionando a pessoa com o endereço.</CardContent>
                    <a href="https://github.com/pedrorosinha/crud-java-spring-boot-pessoa-endereco" target="_blank" rel="noopener noreferrer">
                        <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${apresentacaoSpringBootImg})` }} />
                    <CardTitle>Apresentação sobre o Spring Boot</CardTitle>
                    <CardSubtitle>JAVA, SPRING BOOT, MYSQL</CardSubtitle>
                    <CardContent>Apresentação sobre o Spring Boot mostrando o que é, como instalar/configurar e mostrando um exemplo de um projeto</CardContent>
                    <a href="https://drive.google.com/file/d/1QaCHQSTOOrbeUoHFznKKRRM56zGB1xf9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${apresentacaoReactImg})` }} />
                    <CardTitle>Apresentação sobre o React</CardTitle>
                    <CardSubtitle>REACT, CSS, JAVASCRIPT</CardSubtitle>
                    <CardContent>Apresentação sobre o React mostrando o que é, como instalar/configurar e fazendo um exemplo de um projeto de uma calculadora</CardContent>
                    <a href="https://drive.google.com/file/d/1MWIX_3nVOFQjZnDqX1cJl40g39PM0LmV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button>Acessar</Button>
                    </a>
                </Card>
            </Cards>
        </ProjetosContainer>
    );
}

export default Projetos;