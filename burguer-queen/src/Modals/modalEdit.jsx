import React from "react";
import "./modal.css";


function EditUsers(props) {

  function handleChangeEditModal(event) {
    props.setDataEditModal({
      ...props.dataEditModal,
      [event.target.name]: event.target.value
    })
  }
}

  function handleSubmitEditModal(event) {
    event.preventDefault()

    editUser(props.dataEditModal)
      .then((response) => {
        console.log(response)
      })
    }
  const [isOpenModal, openModal, closeModal] = useModal(false);


const Modal = ({ isOpen, closeModal, children, title }) => {

function handledSubmit(e){
  e.preventDefault();
  closeModal();
}

  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <form className="formModal" onSubmit={handledSubmit}>
        <button className="closeModal" onClick={closeModal} type="button">
          X
        </button>
        <h1>{title}</h1>
        <label>Role</label>
        <input placeholder="" />
        <label>Correo</label>
        <input placeholder="" />
        <label>Contraseña</label>
        <input placeholder="" />
        <button type="submit">Finalizar</button>
        {children}
      </form>
    </div>
  );
};

export default Modal;
