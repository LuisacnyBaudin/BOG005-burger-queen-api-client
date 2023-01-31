import axios from "axios";
import { useReducer } from "react";

const URLapi = "http://localhost:8080/";

const getToken = () => {
  return localStorage.getItem("token");
};

const getLocalUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const loginUsers = (email, password) => {
  return axios.post(URLapi + "login", {
    email,
    password,
  });
};

const getUsers = async () => {
  return await axios({
    method: "GET",
    url: URLapi + "users",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
};

const createUser = async (newUser) => {
  return await axios({
    method: "POST",
    url: URLapi + "users",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
    data: newUser,
  });
};

const editUser = async (editDataUser) => {
  return await axios({
    url: `${URLapi}users/${editDataUser.id}`,
    method: "PATCH",
    headers: {
      // "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    data: {
      email: editDataUser.email,
      role: editDataUser.role,
      password: editDataUser.password,
    },
  });
};

const deleteUser = async (deleteDataUser) => {
  return axios({
    method: "delete",
    url: `${URLapi}users/${deleteDataUser}`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
};

const getProducts = async () => {
  return await axios({
    method: "GET",
    url: URLapi + "products",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
};

const editProducts = async (editDataProduct) => {
  console.log(editDataProduct)
  return await axios({
    method: "PATCH",
    url: `${URLapi}products/${editDataProduct.id}`,
    headers: {
      // "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    data: {
      name: editDataProduct.name,
      price: editDataProduct.price,
      type: editDataProduct.type,
    },
  });
};

const createProducts = async (newProduct) => {
  return await axios({
    method: "POST",
    url: URLapi + "products",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
    data: newProduct,
  });
};

const deleteProduct = async (deleteDataProduct) => {
  console.log("soy delete", deleteDataProduct)
  return axios({
    method: "delete",
    url: `${URLapi}products/${deleteDataProduct}`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
};


function getOrders() {
  return axios({
    method: "get",
    url: URLapi + "orders",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
}
async function imageProducts(img) {
  const form = new FormData();
  form.append("image", img);
  const apiKey = "13f6c238e5259d35197fe6cf74b0adad";
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  const petition = {
    method: "POST",
    body: form,
  };
  const response = await fetch(url, petition);
  const dataResponse = await response.json();

  return dataResponse.data.url;
}
export {
  loginUsers,
  getUsers,
  getProducts,
  createUser,
  editUser,
  deleteUser,
  getOrders,
  createProducts,
  imageProducts,
  editProducts,
  deleteProduct
};
