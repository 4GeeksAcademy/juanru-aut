import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Bienvenido a La App de Juan Ruiz Luque</h1>
      <p className="lead">
        Descubre funcionalidades y opciones dentro de mi Web
      </p>
      <Link to="/signup" className="btn btn-primary mt-3">
        Regístrate Ahora
      </Link>
    </div>
  );
};

export default Home;
