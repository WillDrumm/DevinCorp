import { Link } from "react-router-dom";
import foguete from "../Images/foguete.jpg";
export default function Navibar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand text-white" href="#">
              <img src={foguete} width="50px" alt="logo" />
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="botoes">
                <Link to="/NovoProduto">
                  <button type="button" class="btn btn-primary">
                    Produtos
                  </button>
                </Link>
                <Link to="/CadastroEmpresa">
                  <button type="button" class="btn btn-primary ">
                    Empresas
                  </button>
                </Link>

                <Link to="/Mapa">
                  <button type="button" class="btn btn-primary">
                    Mapa
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
