import "../dropdown/dropDown.css";
import { House, QuestionCircle, Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <>
      <li className="dropdownItem">
        <House color="#222" size={28} />
        <Link>Moje Konto</Link>
      </li>
      <li className="dropdownItem">
        <Cart color="#222" size={28} />
        <Link>Moje Zamówienia</Link>
      </li>
      <li className="dropdownItem">
        <QuestionCircle color="#222" size={28} />
        <Link>Kontakt</Link>
      </li>
    </>
  );
};

export default DropDown;
