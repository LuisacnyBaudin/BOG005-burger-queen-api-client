import React from "react";
import { Header } from "./header";
import { Link } from "react-router-dom";
import imageIcon from "../../images/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";

function HeaderAdmin() {
  const navigate = useNavigate();

  const buttonOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Header>
      <nav className="navAdmin">
        <ul className="orderAdmin">
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/admin">Usuarios</Link>
          </li>
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

export { HeaderAdmin };
