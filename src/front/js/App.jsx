// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import Private from "./views/Private.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/private"
          element={
            <ProtectedRoute>
              <Private />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default injectContext(App);
