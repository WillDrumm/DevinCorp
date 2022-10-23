import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navibar from "../Components/Navibar";
import "../Pages/Correcao.css";

export default function Mapa() {
  const empresa = JSON.parse(localStorage.getItem("empresa")) ?? [];
  return (
    <div>
      <Navibar />
      <MapContainer
        center={[-23.6502, -46.7376]}
        zoom={9}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {empresa.map((emp) => (
          <Marker position={[emp.latitude, emp.longitude]}>
            <Popup>
              <p>
                <span style={{ fontWeight: 900 }}>Razão Social: </span>
                <span>{emp.razaoSocial}</span>
              </p>
              <span style={{ fontWeight: 900 }}>CNPJ: </span>
              <span>{emp.cnpj}</span>
              <p>
                <span style={{ fontWeight: 900 }}>Nome Fantasia: </span>
                <span>{emp.nomeFantasia}</span>
              </p>
              <span style={{ fontWeight: 900 }}>E-Mail: </span>
              <span>{emp.email}</span>

              <p>
                <span></span>
              </p>
              <p>
                <span></span>
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
