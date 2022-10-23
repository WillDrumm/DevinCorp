import { useState, useEffect } from "react";
import Navibar from "../Components/Navibar";
export default function NovoProduto() {
  const [produto, setProduto] = useState({
    url: "",
    nome: "",
    custoUnitario: "",
    descricao: "",
    fornecedor: "",
    grupo: "",
  });
  function salvarProduto(e) {
    let save = JSON.parse(localStorage.getItem("produto")) ?? [];
    save.push(produto);
    localStorage.setItem("produto", JSON.stringify(save));
    alert("Produto salvo com sucesso");
    setProduto({
      url: "",
      nome: "",
      custoUnitario: "",
      descricao: "",
      fornecedor: "",
      grupo: "",
    });

    e.preventDefault();
  }
  function Limpar(e) {
    setProduto({
      url: "",
      nome: "",
      custoUnitario: "",
      descricao: "",
      fornecedor: "",
      grupo: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <Navibar />

      <div className="FormProdContainer container">
        <div className="d-flex justify-content-center">
          <img src={produto.url} alt="imagem" width={"150px"} />
        </div>
        <div className="d-flex justify-content-center">
          <form className="row g-3 " onSubmit={salvarProduto}>
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">
                URL - Imagem
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="url"
                value={produto.url}
                onChange={(e) =>
                  setProduto({ ...produto, url: e.target.value })
                }
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Nome
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="nome"
                value={produto.nome}
                onChange={(e) =>
                  setProduto({ ...produto, nome: e.target.value })
                }
              />
            </div>
            <div class="col-md-6">
              <label for="inputAddress" class="form-label">
                Custo Unitário
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="Custounitario"
                value={produto.custoUnitario}
                onChange={(e) =>
                  setProduto({ ...produto, custoUnitario: e.target.value })
                }
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Descrição
              </label>
              <textarea
                class="form-control"
                id="descricao"
                value={produto.descricao}
                onChange={(e) =>
                  setProduto({ ...produto, descricao: e.target.value })
                }
              />
            </div>
            <div class="col-6">
              <label for="inputAddress2" class="form-label">
                Fornecedor
              </label>
              <select
                required
                class="form-control"
                id="fornecedor"
                value={produto.fornecedor}
                onChange={(e) =>
                  setProduto({ ...produto, fornecedor: e.target.value })
                }
              >
                <option vale=""></option>
                <option value="Mix Frutas">Mix Frutas</option>
                <option value="Gold Meat">Gold Meat</option>
                <option value="Organic's">Organic's</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                Grupo
              </label>
              <select
                required
                class="form-control"
                id="grupo"
                value={produto.grupo}
                onChange={(e) =>
                  setProduto({ ...produto, grupo: e.target.value })
                }
              >
                <option value=""></option>
                <option value="Frutas">Frutas</option>
                <option value="Carnes">Carnes</option>
                <option value="Vegetais">Vegetais</option>
              </select>
            </div>
            <div className="prodButtons d=flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                Salvar
              </button>

              <button onClick={Limpar} class="btn btn-primary">
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
