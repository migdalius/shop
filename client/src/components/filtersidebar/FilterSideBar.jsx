import "../filtersidebar/filterSideBar.css";
import styled, { keyframes } from "styled-components";
const FilterContainer = styled.div`
  margin: 20px;
`;
const TypeOfCare = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const TypeOfCareTitle = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
`;
const TypeOfCareBody = styled.div``;

const FilterSideBar = () => {
  return (
    <FilterContainer>
      <TypeOfCare>
        <TypeOfCareTitle>Rodzaj uprawy</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="homeGrow" />
            Uprawa domowa
          </label>

          <label class="form-control">
            <input type="radio" name="gardenGrow" />
            Uprawa w ogrodzie
          </label>
          <label class="form-control">
            <input type="radio" name="hydroGrow" />
            Uprawa Hydroponiczna
          </label>
          <label class="form-control">
            <input type="radio" name="glassGrow" />
            Uprawa w Szklarni
          </label>
        </TypeOfCareBody>
        <TypeOfCareTitle>Rodzaj Doniczki</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="radio" />
            Osłonka (bez otworów)
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Doniczka (z otworami)
          </label>
        </TypeOfCareBody>
        <TypeOfCareTitle>Typ Doniczki/Osłonki</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="radio" />
            Tworzywo Sztuczne
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Ceramiczna
          </label>
          <label class="form-control">
            <input type="radio" name="radio" />
            Gliniana
          </label>
          <label class="form-control">
            <input type="radio" name="radio" />
            Metalowa
          </label>
        </TypeOfCareBody>
        <TypeOfCareTitle>Typ Nawozu</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="radio" />
            Organiczny
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Mineralny
          </label>
        </TypeOfCareBody>
      </TypeOfCare>
    </FilterContainer>
  );
};

export default FilterSideBar;
