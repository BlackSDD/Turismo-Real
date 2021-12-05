import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../assetss/css/Mantencion.css";
import { Button, Form } from "react-bootstrap";
import NavBarAdmin from "../../Layouts/NavBarAdmin";
import { toast } from "react-toastify";

///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>;

toast.configure({});

const notifyE = () => {
  toast.error("Operación no se pudo llevar a cabo", {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
  });
};

const notifyW = () => {
  toast.warn("Debe seleccionar una Reserva válida", {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
  });
};

export default function SelectReagendarMan() {
  const [opciones, setOpciones] = useState([]);
  const [id_rmant, setIdMant] = useState(-1);

  useEffect(() => {
    getMantenciones();
    console.log("Carga Mants: ", { opciones });
  }, []);

  const getMantenciones = async () => {
    const res = await axios.get("http://localhost:4000/API/mantencionAgendada");
    let x = res.data;
    setOpciones(x);
  };

  const onInputMant = (e) => {
    setIdMant(e.target.value);
  };

  const handleSeleccionar = async (id_rmant) => {
    if (id_rmant == "-1") {
      notifyW();
    } else {
      sessionStorage.id_rmant = id_rmant;
      window.location.href = "/ReagendarMant";
    }
  };

  return (
    <div id="body-mantenciones">
      <NavBarAdmin />
      <div className="container justify-items-center">
        <br />
        <h1>Reagendar Mantención</h1>
        <div className="container" id="div-buscar-man">
          <Form className="contact-form">
            <Form.Group className="mb-3">
              <h2>Seleccione la mantencion para reagendar</h2>
              <Form.Select
                name="id_rmant"
                placeholder="Seleccione la mantención"
                value={id_rmant}
                required
                onChange={onInputMant}
              >
                <option value="-1">Elige una mantención</option>
                {opciones.map((op) => (
                  <option key={op.id_rmant} value={op.id_rmant}>
                    Reserva para departamento: {op.Departamento} con fecha{" "}
                    {op.Fecha}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => handleSeleccionar(id_rmant)}
            >
              Continuar con la Mantención
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
// "id_rgn"
// "nom_rgn"
// "id_com"
// "nom_com"
// "id_cnd"
// "nom_cnd"
// "Mant"
// "id_rmant"
// "dir_dpto"
// "n_amb_dpto"
// "desc_dpto"
// "costo_arri_dpto"

// Departamento
// rm.id_rmant,
// "Fecha",
// rm.id_rmant,
// rm.id_usr,
// rm.est_man,
// m.cost_mant,
// m.deta_mant
// Solicitante
