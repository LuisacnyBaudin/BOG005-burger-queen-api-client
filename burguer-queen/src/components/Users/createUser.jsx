import React, { useState } from "react";
import "../../Modals/modal.css";
import useModal from "../../Modals/useModal";
import { createUser } from "../../utils/petitions";
import Swal from "sweetalert2";

function CreateUsers({ admiGetUsers }) {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [newUser, setNewUser] = useState([
    { email: "", password: "", role: "" },
  ]);

  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser(newUser)
      .then((res) => {
        admiGetUsers();
        if (res.status === 201) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        closeModal
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  }

  return (
    <div className="containerCreateUser">
      <h3 className="titleCreateUser">¿Nuevo Usuario?</h3>
      <button className="btnCreateUser" onClick={openModal}>
        Crear usuario
      </button>
      <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handleSubmit}>
          <button className="closeModal" onClick={closeModal} type="button">
            X
          </button>
          <h1>Crear Usuario</h1>
          <label>Role</label>
          <input
            type="text"
            name="role"
            placeholder=""
            onChange={handleChange}
          />
          <label>Correo</label>
          <input
            type="email"
            name="email"
            placeholder=""
            onChange={handleChange}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder=""
            onChange={handleChange}
          />
          <button type="submit">Finalizar</button>
        </form>
      </div>
    </div>
  );
}

export { CreateUsers };
