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
                    <CardContent>Um projeto de React com JavaScript realizado durante a minha apresentação sobre o React</CardContent>
                    <a href="https://github.com/pedrorosinha/calculadora-react" target="_blank" rel="noopener noreferrer">
                    <Button>Acessar</Button>
                    </a>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url('path_to_image_2')` }} />
                    <CardTitle>Blog responsivo</CardTitle>
                    <CardSubtitle>HTML, CSS, NODE</CardSubtitle>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.</CardContent>
                    <Button>Acessar</Button>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url('path_to_image_3')` }} />
                    <CardTitle>Mobile</CardTitle>
                    <CardSubtitle>Android studio, Kotlin</CardSubtitle>
                    <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.</CardContent>
                    <Button>Acessar</Button>
                </Card>
            </Cards>
        </ProjetosContainer>
    );
}

export default Projetos;