import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  width: 300px;
`;

const Title = styled.h2`
    position: absolute;
    width: 191px;
    height: 44px;
    left: 757px;
    top: 494px;
    margin-top: 10px;

    font-family: 'TTSupermolot-Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #292929;
`;

const SkillList = styled.ul`
    position: absolute;
    width: 217px;
    height: 119px;
    left: 757px;
    top: 548px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SkillName = styled.span`
    width: 100px;
    font-family: "Roboto Flex", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
`;

const CirclesContainer = styled.div`
  display: flex;
`;

const Circle = styled.div`
    width: 12px;
    height: 12px;
    margin-left: 5px;
    border-radius: 50%;
    background: ${({ filled }) => (filled ? '#EAB53D' : 'transparent')};
    border: 2px solid #EAB53D;
`;

const skills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 5 },
  { name: 'JAVA SCRIPT', level: 3 },
  { name: 'REACT', level: 4 },
  { name: 'JAVA', level: 4 },
  { name: 'SPRNG BOOT', level: 4 },
  { name: 'SQL', level: 5 },
];

const ListSkills = () => {
  return (
    <Container>
      <Title>Habilidades</Title>
      <SkillList>
        {skills.map((skill) => (
          <SkillItem key={skill.name}>
            <SkillName>{skill.name}</SkillName>
            <CirclesContainer>
              {[...Array(5)].map((_, i) => (
                <Circle key={i} filled={i < skill.level} />
              ))}
            </CirclesContainer>
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
};

export default ListSkills;