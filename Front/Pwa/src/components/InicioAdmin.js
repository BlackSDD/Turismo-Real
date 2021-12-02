import React from 'react'
import "../assetss/css/Admin.css"
import { Router, Route, Link } from 'react-router-dom';

const MainAdmin = () => {
    return (
        <div id="menuAdmin">
            <div className="row  d-flex justify-content-center mb-5">
            <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
            <div className="title col-12 mt-5 text-center">
                    <h1>Turismo Real</h1>
                </div>
                <div className="title col-12 mt-1 mb-5 text-center">
                    <h3>Administrador</h3>
                </div>
            </div>             

                <div class="card col-md-2 col-sm-12" style={{width:'35vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Gestión departamentos y condominios</h6>
                        <li><Link class="menu-item text-white" to="/t">Administrar condominios</Link></li>
                        <hr />
                        <li><Link class="menu-item text-white" to="/DeptoList">Administrar departamentos</Link></li>
                        <hr />
                        <li><Link class="menu-item text-white" to="/ReservaMantencionList">Reservas de mantenciones</Link></li>
                        <hr />
                        <li><Link class="menu-item text-white" to="/ArticuloList">Inventario de departamentos</Link></li>
                    </div>

                    </div>
                </div>  
                
                <div class="card col-md-2 col-sm-12" style={{width:'35vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Gestión de cuentas</h6>
                        <li><Link class="menu-item text-white" to="/UsuarioNew">Crear cuenta</Link></li>
                        <li><Link class="menu-item text-white" to="/UsuarioList">Validar/Suspender cuentas</Link></li>
                    </div>

                    </div>
                </div>  

                <div class="card col-md-2 col-sm-12" style={{width:'35vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Gestión de servicios extras</h6>
                        <li><Link class="menu-item text-white" to="/AgenciaExternaList">Gestionar agencias externas</Link></li>
                        <li><Link class="menu-item text-white" to="/ServicioExtraList">Gestionar servicios extras</Link></li>
                        <h6>Transporte y tour</h6>                    </div>
                        <li><Link class="menu-item text-white" to="/TourList">Gestionar plan de Tour</Link></li>
                        <li><Link class="menu-item text-white" to="/">Gestionar plan de Transporte</Link></li>
                    </div>
                </div>  

                <div class="card col-md-2 col-sm-12" style={{width:'35vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Informes</h6>
                        <li><a class="menu-item text-white" href="#">Informe de reservas</a></li>
                        <li><a class="menu-item text-white" href="#">Informe estadístico</a></li>
                    </div>

                    </div>
                </div>  

                <div class="card col-md-2 col-sm-12" style={{width:'35vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-sm-12 mt-1 mb-1 text-start">
                        <h6 className="mb-4">Cuenta</h6>
                        <li><a class="menu-item  text-white" href="../Servicios_extras/Ingresar_Agencia.aspx">Cerrar sesión</a></li>
                    </div>
                    </div>
                </div>  
  
 

                
              
            </div>
        </div>
    )
}

export default MainAdmin
