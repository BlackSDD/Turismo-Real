<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MenuAdm.aspx.cs" Inherits="index.MenuAdm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link href="Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title></title>
</head>
<body style="background-image:url(https://fondosmil.com/fondo/1805.jpg); background-size:cover">
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
        <footer class=" fixed-bottom" style="background-color:#1B51F5" >
            <div class="mx-5">
                <h5 class=" text-white-50" style="font-style:italic">Fono: 123456789</h5>
            </div>
        </footer>


</body>

</html>
