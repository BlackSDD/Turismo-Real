<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login4.aspx.cs" Inherits="index.Login4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link href="Recursos/CSS/Estilos4.css" rel="stylesheet" />

    <title>Bienvenido a Turismo Real</title>
</head>
<body>
    <div style="height:100vh" class="container-fluid fondoLogin ">
       
        <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            <div class="col-md-4 col-sm-12 col">             
                <div style="padding-right:5vh; background-color:royalblue" class="card">
                 <form id="form1" runat="server">
                <div class="row">
                      <div class="col-md-6 col-sm-12 d-flex  justify-content-center mt-5 mb-2">
                      <asp:Image ID="Image1" runat="server" ImageUrl="https://image.freepik.com/free-vector/blue-buildings_23-2147505265.jpg" Width="80%" Height="75%"   />
                  </div>
                 <div class="col-md-6 col-sm-12 text-center text-white">

                    <div class="mt-3 mb-4" >
                        <asp:Label class="h3" ID="Title" runat="server" Text="Iniciar sesión"></asp:Label>                                              
                    </div>
 
                    <div class="mb-2">
                        <asp:Label ID="lbCorreo" runat="server" Text="Correo electrónico"></asp:Label> 
                    </div>
                    <div>
                        <asp:TextBox ID="tbCorreo" runat="server" placeholder="ejemplo@correo.com" ></asp:TextBox>
                    </div>
                    
                    <div class="mt-4 mb-2">
                        <asp:Label ID="lbContrasena" runat="server" Text="Contraseña"></asp:Label> 
                    </div>
                    <div>
                        <asp:TextBox ID="tbContrasena" runat="server" placeholder="1234"></asp:TextBox>
                    </div>
                     <div class="row">
                         <div class="col-md-6 col-sm-12 mt-4 mb-3">
                        <asp:Button ID="btIngresar" class="btnLogin btn " runat="server" Text="Ingresar" />
                    </div>
                     <div class="col-md-6 col col-sm-12 mt-4 mb-3">
                        <asp:Button ID="btRegistro" class="btnLogin btn" runat="server" Text="Registrarse" />
                    </div>
                     </div>
                    

                    </div>
                </div>
                
                 </form>
                </div>

            </div>

        </div>
   </div>
</body>
</html>
