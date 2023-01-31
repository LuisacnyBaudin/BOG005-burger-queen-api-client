import React from "react";
import { Header } from "./header";
import { Link } from "react-router-dom";
import imageIcon from "../../images/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";

function HeaderWaiter() {
  const navigate = useNavigate();

  const buttonOut = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Header>
      <nav className="navWaiter">
          <ul className="orderWaiter">
            {/* <li>
              <Link to="/waiter">Ordenes</Link>
            </li> */}
            {/* <li>
              <Link to="/breackfast">Desayuno</Link>
            </li>
            <li>
              <Link to="/lunch">Almuerzo</Link>
            </li> */}
            <li>
            <img
              id="logoutIcon"
              onClick={buttonOut}
              src={imageIcon}
              alt="logout"
            />
          </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export { HeaderWaiter };
