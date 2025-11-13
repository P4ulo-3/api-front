import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro.jsx";
import { ToastContainer } from "react-toastify";
import Usuarios from "./pages/Usuarios.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
