import React, { useState } from "react";
import "../../Modals/modal.css";
import useModal from "../../Modals/useModal";
import { createProducts } from "../../utils/petitions";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

function CreateProduct({admiGetProduct}) {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const [newProduct, setNewProduct] = useState([
    { name: "", price: "", type: "" },
  ]);

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createProducts(newProduct)
      .then((res) => {
        admiGetProduct();
        if (res.status === 201) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        closeModal;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  }

  return (
    <div className="containerCreateProduct">
      <h3 className="titleCreateUser">¿Nuevo Producto?</h3>
      <button className="btnCreateUser" onClick={openModal}>
        Crear producto
      </button>
      <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handleSubmit}>
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <h1>Crear Producto</h1>
          <label>Nombre</label>
          <input placeholder="" name="name" onChange={handleChange} />
          <label>Precio</label>
          <input placeholder="" name="price" onChange={handleChange} />
          <label>Imagen</label>
          <input placeholder="" />
          <label>Tipo</label>
          <input placeholder="" name="type" onChange={handleChange} />
          <button type="submit">Finalizar</button>
        </form>
      </div>
    </div>
  );
}

export { CreateProduct };
