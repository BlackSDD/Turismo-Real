<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login4.aspx.cs" Inherits="index.Login4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link href="Recursos/CSS/Estilos4.css" rel="stylesheet" />

    <title>Registro de cuenta</title>
</head>
<body>
    <div class="container-fluid fondoLogin" style="background:fixed;background-size:cover;background-image:url(https://fondosmil.com/fondo/1805.jpg)">


        <div style="padding-top:100px;padding-bottom:100px" class="row  d-flex justify-content-center">
            
            <div class="col-md-4 col-sm-12">             
                <div style="background-color:royalblue" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <asp:Label class="h3" ID="Title" runat="server" Text="Registro de cuenta"></asp:Label>                                              
                    </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbCorreo" runat="server" Text="Correo electrónico"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-3">
                            <asp:Label ID="lbContraseña" runat="server" Text="Contraseña"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-3">
                            <asp:Label ID="lbConfContraseña" runat="server" Text="Confirmar contraseña"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbNombre" runat="server" Text="Nombre"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbApellidoP" runat="server" Text="Apellido paterno"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbApellidoM" runat="server" Text="Apellido materno"></asp:Label> 
                        </div>
                        <div class="mt-4 mb-2">
                            <asp:Label ID="lbTelefono" runat="server" Text="Teléfono"></asp:Label> 
                        </div>

                        </div>

                        <!--TextBox-->
                    <div class="col-6 text-start">
                    <div class="mt-4 mb-2">
                        <asp:TextBox ID="tbCorreo" runat="server"></asp:TextBox>
                    </div>
                     
                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbContraseña" runat="server" TextMode="Password"></asp:TextBox>
                    </div>

                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbConfContraseña" runat="server" TextMode="Password"></asp:TextBox>
                    </div>
                    
                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbNombre" runat="server"></asp:TextBox>
                    </div>
                    
                    
                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbApellido" runat="server"></asp:TextBox>
                    </div>
                     
                    <div  class="mt-3 mb-2">
                        <asp:TextBox ID="tbApellidoM" runat="server"></asp:TextBox>
                    </div>
                     
                    <div class="mt-3 mb-2">
                        <asp:TextBox ID="tbTelefono" runat="server" TextMode="Phone"></asp:TextBox>
                    </div>
                    </div>
                    </div>
                    
                   
                     

                     <!--Botones--> 

                     <div class="row mt-5 mx-4">
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
