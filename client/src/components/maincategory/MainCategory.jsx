import styled, { keyframes } from "styled-components";

const CategoryDescContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin: 60px;
`;
const CategoryImg = styled.img`
  margin: 10px;
  object-fit: scale-down;
  width: 120px;
`;

const CategoryDescWrapper = styled.div`
  margin: 10px;
  width: 500px;
`;
const CategoryDescTitle = styled.h1`
  font-size: 28px;
`;
const CategoryDesc = styled.p`
  font-size: 14px;
  color: #717371;
`;

const MainCategory = () => {
  return (
    <CategoryDescContainer>
      <CategoryImg src="../img/testproduct/bazylia_cytrynowa.jpg" />
      <CategoryDescWrapper>
        <CategoryDescTitle>Tytuł Kategorii</CategoryDescTitle>
        <CategoryDesc>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </CategoryDesc>
      </CategoryDescWrapper>
    </CategoryDescContainer>
  );
};

export default MainCategory;
