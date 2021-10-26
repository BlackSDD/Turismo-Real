<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Reg_departamento.aspx.cs" Inherits="index.Mantenedor_departamentos.Reg_departamento" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link href="Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Registro de departamento</title>
</head>
<body>
    <div class="container-fluid fondoRegistroDepto" style="background:fixed;background-size:cover;background-image:url(https://fondosmil.com/fondo/1805.jpg)">

    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#1B51F5">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="#">
        <h2>Turismo Real</h2>
        <h4 class="text-center">Administrador</h4>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background-color:#2339DB">
            <li><a class="dropdown-item text-white" href="#">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="#">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="#">Actualizar datos de departamento</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-white" href="#">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background-color:#2339DB;">
            <li><a class="dropitem dropdown-item text-white" href="#">Registro de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="#">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="#">Actualizar datos de cliente</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropitem dropdown-item text-white" href="#">Eliminar registro de cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:100px;padding-bottom:100px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background-color:royalblue" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <asp:Label class="h3" ID="Title" runat="server" Text="Registro de departamento"></asp:Label>                                              
                    </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                        <div class="mt-4 mb-2">
                            <asp:Label ID="Label1" runat="server" Text="Condominio"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbCorreo" runat="server" Text="Dirección departamento"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-3">
                            <asp:Label ID="lbContraseña" runat="server" Text="Número deptaramento"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-3">
                            <asp:Label ID="lbConfContraseña" runat="server" Text="Número de ambientes"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbNombre" runat="server" Text="Costo de arriendo"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbApellidoP" runat="server" Text="Descripción"></asp:Label> 
                        </div>
                        </div>

                        <!--TextBox-->
                    <div class="col-6 text-start">
                    <div class="mt-4 mb-2">
                        <asp:DropDownList ID="ddlistCondominios" runat="server"></asp:DropDownList>
                    </div>
                    <div class="mt-4 mb-2">
                        <asp:TextBox ID="tbCorreo" runat="server"></asp:TextBox>
                    </div>
                     
                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbContraseña" runat="server"></asp:TextBox>
                    </div>

                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbConfContraseña" runat="server" ></asp:TextBox>
                    </div>
                    
                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbNombre" runat="server"></asp:TextBox>
                    </div>                                                         
                    </div>
                        <div class="col-12 mt-3 mb-3">
                            <textarea id="TextArea1" cols="70" rows="10"></textarea> 
                        </div>
                    </div>      
                     
                    <!--Adjuntadores--> 

                    <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <asp:Label ID="lbImagen1" runat="server" Text="Imagen 1"></asp:Label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj1" type="file" />
                        </div>
                    </div>
                     
                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <asp:Label ID="lbImagen2" runat="server" Text="Imagen 2"></asp:Label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj2" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <asp:Label ID="lbImagen3" runat="server" Text="Imagen 3"></asp:Label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj3" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <asp:Label ID="lbImagen4" runat="server" Text="Imagen 4"></asp:Label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj5" type="file" />
                        </div>
                    </div> 

                    </div> 


                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                        <asp:Button ID="btRegistrar" class="btnLogin btn " runat="server" Text="Registrar" />
                    </div>
                     <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                        <asp:Button ID="btCancelar" class="btnLogin btn" runat="server" Text="Cancelar" />
                    </div>
                     </div>
                    

                    </div>
                
                 </form>
                
                </div>
                 
            </div>
            
            </div>
               <div class="foot text-white" style="width:100%; height:5vh; background-color:royalblue;" >
                   <div class="row mt-2">
                       
                       <div class="col-6 text-center mt-2">
                           <h5>Fono: 123456789</h5>
                       </div>
                       <div class="col-6 text-center mt-2">
                           <h5>Correo: TurismoReal@clientes.com</h5>
                       </div>
                   </div> 
                   
               </div>                  
    </div>
                  
</body>
</html>
