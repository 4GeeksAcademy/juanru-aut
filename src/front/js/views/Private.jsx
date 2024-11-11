import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Private = () => {
  const { store } = useContext(Context);

  return (
    <div className="container mt-5 text-center">
      <h1>Bienvenido, {store.user ? store.user.name : "Usuario"}</h1>
      <p className="lead">Esta es tu área privada de usuario.</p>
    </div>
  );
};

export default Private;