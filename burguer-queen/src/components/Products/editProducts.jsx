import React, { useState } from "react";
import useModal from "../../Modals/useModal";
import editar from "../../images/edit.png";
import Delete from "../../images/delete.png";
import { imageProducts } from "../../utils/petitions";
import { editProducts, deleteProduct } from "../../utils/petitions";
import Swal from "sweetalert2";

function EditProducts({ name, price, type, id }) {
  const [imgProduct, setImgProduct] = useState("");
  const [deleteDataProduct, setDeleteDataProduct] = useState(false);
  const [editDataProduct, setEditDataProduct] = useState({
    name: name,
    id: id,
    price: price,
    type: type,
  });
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleChangeProduct = (e) => {
    setEditDataProduct({
      ...editDataProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    editProducts(editDataProduct)
      .then((res) => {
        // localStorage.setItem("userUpdate", JSON.stringify(res.data));
        if (res.status === 200) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
        console.log(res.status);
        closeModal;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "Tenemos un problema, intenta de nuevo", "error");
      });
  };

  const handleSubmitDelete = () => {
    deleteProduct(id)
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás deshacer esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, elimínalo!",
      cancelButtonText: "Cancelar",
    }) 
      .then((res) => {
        if (res.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );

          setDeleteDataProduct(!deleteDataProduct);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      })
      .catch((error) => {
        error;
      });
  };

  async function onChangeImg(event, setImgProduct) {
    const uploadedImg = await event.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(uploadedImg);
    fr.onload = () => setImgProduct(fr.result);
    return uploadedImg;
  }

  const imageProductChange = async (event) => {
    const urlUpload = await onChangeImg(event, setImgProduct);
    console.log("urlUpload", urlUpload);
    const urlImage = await imageProducts(urlUpload);
    setImgProduct(urlImage);
  };

  return (
    <td>
      <img
        onClick={openModal}
        style={{ height: "20px", width: "20px" }}
        src={editar}
        alt="editar"
      />

      <img
        onClick={handleSubmitDelete}
        style={{ height: "20px", width: "20px" }}
        src={Delete}
        alt="delete"
      />
      <div className={`modal ${isOpenModal && "modal-open"}`}>
        <form className="formModal" onSubmit={handleSubmitProduct}>
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <h1>Editar Producto</h1>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ingrese nombre del producto"
            value={editDataProduct.name}
            onChange={handleChangeProduct}
            required
          />
          <label>Precio</label>
          <input
            type="number"
            name="price"
            placeholder="Ingrese precio"
            value={editDataProduct.price}
            onChange={handleChangeProduct}
            required
          />
          {/* <label>Imagen</label>
          <input
            type="image"
            placeholder="Ingrese imagen"
            value={editDataProduct.image}
            onChange={handleChangeProduct}
            required
          /> */}
          <label>Tipo</label>
          <input
            type="text"
            name="type"
            placeholder="Ingrese tipo de producto"
            value={editDataProduct.type}
            onChange={handleChangeProduct}
            required
          />
          <button>Finalizar</button>
        </form>
      </div>
    </td>
  );
}

export { EditProducts };
