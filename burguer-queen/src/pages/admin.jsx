import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import { getUsers } from "../utils/petitions";
import UsersTable from "../components/Tables/usersTable";
import { HeaderAdmin } from "../components/Header/headerAdmin";


function Admin() {
  const [users, setUsers] = useState([]);

  const admiGetUsers = () => {
    getUsers()
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err, "caducó token"));
  };

  useEffect(() => {
    admiGetUsers();
  }, []);

  return (
    <section className="containerAdmin">
      <HeaderAdmin />
      <UsersTable rows={users} admiGetUsers={admiGetUsers} />
    </section>
  );
}

export default Admin;
