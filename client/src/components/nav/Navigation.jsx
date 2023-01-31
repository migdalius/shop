import "../nav/navigation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Basket3, PersonCircle, Search } from "react-bootstrap-icons";
import DropDown from "../dropdown/DropDown";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #0d9488;
  height: 100px;
  color: #fff;
  border-bottom: 1px solid #ddd;
`;

const SearchSection = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;

  @media (max-width: 985px) {
    width: 550px;
  }

  @media (max-width: 890px) {
    width: 450px;
  }

  @media (max-width: 790px) {
    width: 350px;
  }
  @media (max-width: 690px) {
    width: 280px;
  }

  @media (max-width: 525px) {
    width: 240px;
  }

  @media (max-width: 480px) {
    width: 220px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  overflow: hidden;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 45px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: #f3f4f6;
`;

const CategoryList = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width: 1030px) {
    width: 50%;
  }
  @media (max-width: 880px) {
    width: 60%;
  }
  @media (max-width: 710px) {
    width: 70%;
  }
  @media (max-width: 580px) {
    width: 80%;
  }
  @media (max-width: 505px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const CategoryItemList = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [shopCartOpen, setShopCartOpen] = useState(false);
  const [query, setQuery] = useState("");

  //redux

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <MainContent>
        <Link to={"/"} style={{ color: "white" }}>
          Projekt X
        </Link>
        <SearchSection>
          <input
            type="text"
            placeholder="Szukaj..."
            onChange={(e) => setQuery(e.target.value)}
            className="Nav__searchBar"
          />
          <Search color="#0d9488" className="Nav__searchIcon loop" />
        </SearchSection>
        <UserContainer>
          <div className="ty">
            <Link to={"/koszyk"}>
              <Basket3 color="#fff" size={35} className="shopping-cart" />
              <div className="shopping-circle">{quantity}</div>
            </Link>
          </div>
          <div
            className="menu-container"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="menu-trigger">
              <UserDetail>
                <div>
                  <PersonCircle color="#fff" size={35} />
                </div>
                <p class="account">Moje konto</p>
              </UserDetail>
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropDown />
              </ul>
            </div>
          </div>
        </UserContainer>
      </MainContent>
      <CategoryContainer>
        <CategoryList>
          <CategoryItemList>
            <Link to={"/produkty"}>Wszystkie Produkty</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Dropshipping</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Współpraca</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Integracje</Link>
          </CategoryItemList>
          <CategoryItemList>
            <Link>Kontakt</Link>
          </CategoryItemList>
        </CategoryList>
      </CategoryContainer>
    </>
  );
};

export default Navigation;
