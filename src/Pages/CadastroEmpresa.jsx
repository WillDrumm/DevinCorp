import { useState, useEffect } from "react";
import Navibar from "../Components/Navibar";
export default function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    complemento: "",
    latitude: "",
    longitude: "",
  });
  function Limpar(e) {
    setEmpresa({
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      email: "",
      cep: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      complemento: "",
      latitude: "",
      longitude: "",
    });

    e.preventDefault();
  }
  useEffect(() => {
    if (empresa.cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${empresa.cep}/json/`)
        .then((resposta) => {
          return resposta.json();
        })
        .then((dados) => {
          setEmpresa({
            ...empresa,
            endereco: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
          });
        });
    }
  }, [empresa.cep]);
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?street=${empresa.endereco}&format=json`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        setEmpresa({
          ...empresa,
          latitude: dados[0].lat,
          longitude: dados[0].lon,
        });
      });
  }, [empresa.endereco]);
  function salvarEmpresa(e) {
    let save = JSON.parse(localStorage.getItem("empresa")) ?? [];
    save.push(empresa);
    localStorage.setItem("empresa", JSON.stringify(save));
    alert("Empresa salva com sucesso");
    setEmpresa({
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      email: "",
      cep: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      complemento: "",
      latitude: "",
      longitude: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <Navibar />
      <div className="FormProdContainer container">
        <form class="row g-3" onSubmit={salvarEmpresa}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Razão Social
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="razasocial"
              value={empresa.razaoSocial}
              onChange={(e) =>
                setEmpresa({ ...empresa, razaoSocial: e.target.value })
              }
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Nome Fantasia
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="nomefantasia"
              value={empresa.nomeFantasia}
              onChange={(e) =>
                setEmpresa({ ...empresa, nomeFantasia: e.target.value })
              }
            />
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label">
              CNPJ
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="cnpj"
              value={empresa.cnpj}
              onChange={(e) => setEmpresa({ ...empresa, cnpj: e.target.value })}
            />
          </div>
          <div class="col-md-6">
            <label for="inputAddress2" class="form-label">
              E-Mail
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="email"
              value={empresa.email}
              onChange={(e) =>
                setEmpresa({ ...empresa, email: e.target.value })
              }
            />
          </div>
          <hr />
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              CEP
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="cep"
              value={empresa.cep}
              onChange={(e) => setEmpresa({ ...empresa, cep: e.target.value })}
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Endereço
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="endereco"
              value={empresa.endereco}
              onChange={(e) =>
                setEmpresa({ ...empresa, endereco: e.target.value })
              }
            />
          </div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              Número
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="numero"
              value={empresa.numero}
              onChange={(e) =>
                setEmpresa({ ...empresa, numero: e.target.value })
              }
            />
          </div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              Bairro
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="bairro"
              value={empresa.bairro}
              onChange={(e) =>
                setEmpresa({ ...empresa, bairro: e.target.value })
              }
            />
          </div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              Cidade
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="cidade"
              value={empresa.cidade}
              onChange={(e) =>
                setEmpresa({ ...empresa, cidade: e.target.value })
              }
            />
          </div>
          <div class="col-md-12">
            <label for="inputZip" class="form-label">
              Complemento
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="complemento"
              value={empresa.complemento}
              onChange={(e) =>
                setEmpresa({ ...empresa, complemento: e.target.value })
              }
            />
          </div>
          <hr></hr>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Latitude
            </label>
            <input
              type="text"
              class="form-control"
              id="latitude"
              value={empresa.latitude}
              onChange={(e) =>
                setEmpresa({ ...empresa, latitude: e.target.value })
              }
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Longitude
            </label>
            <input
              type="text"
              class="form-control"
              id="longitude"
              value={empresa.longitude}
              onChange={(e) =>
                setEmpresa({ ...empresa, longitude: e.target.value })
              }
            />
          </div>

          <div class="col-12 d-flex justify-content-end d-grid gap-3 botaoForm">
            <button onClick={Limpar} class="btn btn-primary">
              Limpar
            </button>

            <button type="submit" class="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
