import React from "react";
import styled, { keyframes } from "styled-components";

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  /* border: 1px solid #ddd; */
`;
const CategoryContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const TopImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Dots = styled.img`
  width: 30px;
`;

const TopTitle = styled.p``;
const TopNav = () => {
  return (
    <TopContainer>
      <CategoryContainer>
        <TopImage src="../img/step/start.png" />
        <TopTitle>Start</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/nasiona.png" />
        <TopTitle>Nasiona</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/doniczka.png" />
        <TopTitle>Doniczki/Osłonki</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/podloze.png" />
        <TopTitle>Podłoże</TopTitle>
      </CategoryContainer>

      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/drenaz.png" />
        <TopTitle>Drenaż</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/nawoz.png" />
        <TopTitle>Nawóz</TopTitle>
      </CategoryContainer>
    </TopContainer>
  );
};

export default TopNav;
