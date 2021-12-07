import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../assetss/css/Mantencion.css";
import { Button, Form } from "react-bootstrap";
import NavBarAdmin from "../../Layouts/NavBarAdmin";
import { toast } from "react-toastify";
import NavBar from "../../Layouts/Navbar";
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

  let tipo = parseInt(sessionStorage.tipoUsr)
    if(tipo == 0 || tipo==2 ||tipo ==3){
        return(
        <div id="menuAdmin">
        <NavBar/>
        <div className="row  d-flex justify-content-center mb-5">
        <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
        <div className="title col-12 mt-5 text-center">
                <h1>Turismo Real</h1>
            </div>
            <div className="title col-12 mt-1 mb-5 text-center">
                <h3>esta pagina es administrativa</h3>
                <h3>porfavor inicie sesion</h3>
            </div>
        </div>             

        </div>
    </div>)
    }
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
