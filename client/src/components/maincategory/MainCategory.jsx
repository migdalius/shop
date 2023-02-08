import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

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

const MainCategory = (category) => {
  const categoryName = category.category;
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const categoryApi = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/categories?category=${categoryName}`
        );
        setCat(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    categoryApi();
  }, []);
  console.log(cat[0].title);

  return (
    <CategoryDescContainer>
      <CategoryImg src={cat[0].img} />
      <CategoryDescWrapper>
        <CategoryDescTitle>{cat[0].title}</CategoryDescTitle>
        <CategoryDesc>{cat[0].desc}</CategoryDesc>
      </CategoryDescWrapper>
    </CategoryDescContainer>
  );
};

export default MainCategory;
