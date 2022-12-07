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
    data: newUser
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

const editUser = async (editDataUser)=>{
 console.log(editDataUser.id)

    return await axios({
        method: "PATCH", 
        url:`${URLapi}users/${editDataUser.id}`, 
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        },
        data: {
          email: editDataUser.email, 
          role: editDataUser.role, 
        }
    })     
}


export { loginUsers, getUsers, getProducts, createUser, editUser };
