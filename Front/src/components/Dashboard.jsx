import React from 'react'
import Footer from './Layouts/Footer'

const MainAdmin = () => {
    return (
        <div >
            <div className="row  d-flex justify-content-center mb-5">             
                <div className="title col-12 mt-5 text-center">
                    <h1>Turismo Real</h1>
                </div>
                <div className="title col-12 mt-1 mb-5 text-center">
                    <h3>Administrador</h3>
                </div>

                <div class="card col-md-2 col-sm-12" style={{width:'40vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Gestión departamentos y condominios</h6>
                        <li><a class="form-text menu-item text-white" href="http://localhost:3000/condominio">Registro de condominio</a></li>
                        <li><a class="form-text menu-item text-white" href="../Mantenedor_departamentos/EliminarCondominio.aspx">Administrar condominios</a></li>
                        <hr />
                        <li><a class="form-text menu-item text-white" href="http://localhost:3000/departamento">Registro de departamento</a></li>
                        <li><a class="form-text menu-item text-white" href="../Mantenedor_departamentos/VerDatosDepto_Buscar.aspx">Administrar departamentos</a></li>
                        <hr />
                        <li><a class="form-text menu-item text-white" href="../Mantenedor_departamentos/ReservarMantencion.aspx">Reservar mantención de departamento</a></li>
                        <li><a class="form-text menu-item text-white" href="../Mantenedor_departamentos/Ingresar_mantencion.aspx">Ingresar mantención de departamento</a></li>
                        <li><a class="form-text menu-item text-white" href="../Mantenedor_departamentos/IngresarInventario.aspx">Ingresar inventario de departamento</a></li>

                    </div>

                    </div>
                </div>  
                
                <div class="card col-md-2 col-sm-12" style={{width:'40vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Gestión clientes</h6>
                        <li><a class="form-text menu-item text-white" href="#">Autenticar cliente</a></li>
                        <li><a class="form-text menu-item text-white" href="VerClienteBsucar.aspx">Ver datos de cliente</a></li>
                        <li><a class="form-text menu-item text-white" href="ActualizarClienteBuscar.aspx">Actualizar datos de cliente</a></li>
                        <li><a class="form-text menu-item text-white" href="SuspenderCliente.aspx">Suspender cliente</a></li>
                    </div>

                    </div>
                </div>  

                <div class="card col-md-2 col-sm-12" style={{width:'40vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Gestión de servicios extras</h6>
                        <li><a class="form-text menu-item text-white" href="../Servicios_extras/Ingresar_Agencia.aspx">Ingresar agencia externa</a></li>
                        <li><a class="form-text menu-item text-white" href="../Servicios_extras/Planificar_transporte.aspx">Planificar transporte</a></li>
                        <li><a class="form-text menu-item text-white" href="#">Planificar Tour</a></li>
                    </div>

                    </div>
                </div>  

                <div class="card col-md-2 col-sm-12" style={{width:'40vh',backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-12 mt-1 mb-1 text-start">
                        <h6>Informes</h6>
                        <li><a class="form-text menu-item text-white" href="#">Informe de reservas</a></li>
                        <li><a class="form-text menu-item text-white" href="#">Informe estadístico</a></li>
                    </div>

                    </div>
                </div>  

                <div class="card col-md-2 col-sm-12" style={{backgroundColor:'black', opacity:0.8}}>
                    <div class="card-body">
                    <div className="title col-sm-12 mt-1 mb-1 text-start">
                        <h6 className="mb-4">Otras funcionalidades</h6>
                        <li><a class="menu-item  text-white" href="../Servicios_extras/Ingresar_Agencia.aspx">Registrar región</a></li>
                        <li><a class="menu-item  text-white" href="../Servicios_extras/Ingresar_Agencia.aspx">Cerrar sesión</a></li>
                    </div>
                    </div>
                </div>  
  
 

                
              
            </div>
        <Footer/>
        </div>
    )
}

export default MainAdmin
