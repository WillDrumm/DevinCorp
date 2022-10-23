import { Navigate, useNavigate } from "react-router-dom";
import Navibar from "../Components/Navibar";
import "../Pages/Correcao.css";
import foguete from "../Images/foguete.jpg";
import logoCorp from "../Images/CORP.png";

export default function LoginPage() {
  const navigate = useNavigate();
  function Logar(e) {
    navigate("/Mapa");
    e.preventDefault();
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={logoCorp} style={{ width: "1000px" }} />
      </div>
      <div className="formBox">
        <form className="formContainer " onSubmit={Logar}>
          <div class="order-2 p-2 bd-highlight">
            <label for="exampleInputEmail1" class="form-label">
              E-Mail
            </label>
            <input
              required
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Digite seu E-Mail"
            />
            <div id="emailHelp" class="form-text">
              Nunca compartilhe sua senha com mais ninguém.
            </div>
          </div>
          <div class="order-2 p-2 bd-highlight">
            <label for="exampleInputPassword1" class="form-label">
              Senha
            </label>
            <input
              required
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Digite sua senha"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Manter logado
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
