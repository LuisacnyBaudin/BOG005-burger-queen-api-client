import React from "react";
import image from "../../images/Gourmet.jpg";
import imageIcon from "../../images/cerrar-sesion.png";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header({children}) {
  const navigate = useNavigate();

  const buttonOut = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
   <header id="containerHeader">
    <Navbar collapseOnSelect  expand="lg" >
      <Container>
        <img className="logoImageAdmin" src={image} alt="foto del logo" />
        <Navbar.Brand>
          <h1 className="titleAdmin"> Gourmet Queen </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {children}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
//   return (
//     <header id="containerHeader">
//       <img className="logoImageAdmin" src={image} alt="foto del logo" />
//       <h1 className="titleAdmin"> Gourmet Queen </h1>
//       {children}
//       <img id="logoutIcon" onClick={buttonOut} src={imageIcon} alt="logout" />
//     </header>
//   );
// }

export { Header };
