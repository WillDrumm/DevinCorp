import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import CadastroEmpresa from "../Pages/CadastroEmpresa";
import Mapa from "../Pages/Mapa";
import NovoProduto from "../Pages/NovoProduto";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/CadastroEmpresa" element={<CadastroEmpresa />} />
        <Route path="/NovoProduto" element={<NovoProduto />} />
        <Route path="/Mapa" element={<Mapa />} />
      </Routes>
    </BrowserRouter>
  );
}
