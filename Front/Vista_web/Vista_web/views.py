from django.http import HttpResponse

#Login--------------------------------------------------------------------------
def Login(request): 

    documento="""<!DOCTYPE html>

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
    <div style="height:100vh; font-family:Roboto; background:fixed; background-size:cover; background-image:url(https://images-ext-1.discordapp.net/external/ujXibiLef8JuvYeiqPS-l2keAD1nU8v_UcDfoTaqGVY/https/wallpaperaccess.com/full/3203345.jpg?width=1191&height=670)" class="container-fluid fondoLogin">
       
        <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            <div class="col-md-5 col-sm-12 col">             
                <div style="padding-right:5vh; background-color:royalblue" class="card">
                 <form id="form1" runat="server">
                    <div class="row">
                      <div class="col-md-6 col-sm-12 d-flex  justify-content-center mt-5 mb-2">
                        <img src="https://image.freepik.com/free-vector/blue-buildings_23-2147505265.jpg" width="200" height="200" />
                      </div>
                             <div class="col-md-6 col-sm-12 text-center text-white">

                        <div class="mt-3 mb-4" >
                            <h1>Iniciar sesión</h1>                                             
                        </div>
 
                        <div class="mb-2">
                            <label>Correo electrónico</label> 
                        </div>
                        <div>
                            <input type="text" id="tbCorreoLogin" />
                        </div>
                    
                        <div class="mt-4 mb-2">
                            <label>Contraseña</label>   
                        </div>
                        <div>
                            <input type="password" id="tbContraseñaLogin" />
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-sm-12 mt-4 mb-3">
                                <a href="http://127.0.0.1:8000/Registro_Cuenta/">
                                    <input type="button" value="Registro"/>
                                </a>                          
                            </div>
                            <div class="col-md-6 col-sm-12 mt-4 mb-3">
                                <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                    <input type="button" value="Ingresar"/>
                                </a>
                            </div>
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
    </html>""" 

    return HttpResponse(documento)
#-----------------------------------------------------------------------------------------------------------------------------------
#RegistroCuenta--------------------------------------------------------------------------
def registroCuenta(request):
    documento="""    <!DOCTYPE html>

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
            
            <div class="col-md-4 col-sm-12 mb-5">             
                <div style="background-color:royalblue" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <h1>Registro de cuenta</h1>                                           
                    </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                        <div class="mt-4 mb-2">
                            <label>Correo electrónico</label>
                        </div>
                        <div class="mt-4 mb-3">
                            <label>Contraseña</label>
                        </div>
                        <div class="mt-4 mb-3">
                            <label>Confirmar contraseña</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Nombre</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Apellido paterno</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Apellido materno</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Teléfono</label>
                        </div>

                        </div>

                        <!--TextBox-->
                    <div class="col-6 text-start">
                    <div class="mt-4 mb-2">
                        <input type="email"/>
                    </div>
                     
                    <div  class="mt-3 mb-2">
                        <input type="password"/>
                    </div>

                    <div  class="mt-3 mb-2">
                        <input type="password"/>
                    </div>
                    
                    <div  class="mt-3 mb-2">
                        <input type="text"/>
                    </div>
                    
                    
                    <div  class="mt-3 mb-2">
                        <input type="text"/>
                     
                    <div  class="mt-3 mb-2">
                        <input type="text"/>
                     
                    <div class="mt-3 mb-2">
                        <input type="tel"/>
                    </div>
                    </div>
                    </div>
                    </div>
                   
                     

                     <!--Botones--> 

                     <div class="row mb-5 mt-5">
                             <div class="col-md-6 col-sm-12">
                                 <a href="http://127.0.0.1:8000/Login/">
                                     <input type="button" value="Crear cuenta" name="btnLoginIngresar"/>
                                 </a>                             
                        </div>
                            <div class="col-md-6 col col-sm-12">
                                <a href="http://127.0.0.1:8000/Login/">
                                    <input type="button" value="Cancelar" name="btnLoginCancelar"/>
                                </a>
                            </div>
                        </div>
                                      
                
                 </form>
                
                </div>
                 
            </div>
            
            </div>
                            
        </div>
    </body>

    </html>"""
    return HttpResponse(documento)
#-----------------------------------------------------------------------------------------------------------------------------------
#menuAdmin
def menuAdmin(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title></title>
    </head>
    <body style="font-family:Roboto">
   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>

        <!--Fondo carrusel -->
    <div>

    </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide h-100" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div>
                        <img src="http://www.subturismo.gob.cl/wp-content/uploads/2020/06/vi%C3%B1a-del-mar-cuarentena-coronavirus.jpg" class="d-block w-100 d-block h-100"/>
                        
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://media.sabes.cl/2020/02/portada-conce-media-1270x727.jpg.webp" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                    <img src="https://lustermagazine.com/wp-content/uploads/2019/07/iquique-chile-1800x1000-1.jpg" class="d-block w-100"/>
                </div>
            </div>
       </div>
         <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>


    </body>

    </html>"""
    return HttpResponse(documento)
#-------------------------------------------------------------------------------------------------------------------------------
#Registro_de_departamento
def registroDepartamento(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Registro de departamento</title>

    <!--Scripts-->
        <script type="text/javascript">
        function confirmar()
        {
            var respuesta = confirm("¿Enviar registro?");
            if (respuesta == true) {
                return true;
            }
            else {
                return false;
            }
        }
      
        </script>

    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto;background:fixed;background-size:cover;background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvYPGmdLWr3bb8hVhzcJo5aMB-171xMvbPN0Clgi9uZiLefuTDV5cUwi976PqLzPLW5w&usqp=CAU)">

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background-color:royalblue;font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <h2>Registro de departamento</h2>                                              
                    </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                            <div class="mt-4 mb-2">
                                <label>Condominio</label>
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Dirección departamento</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número deptaramento</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número de ambientes</label>
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Costo de arriendo</label> 
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Descripción</label>
                            </div>
                        </div>

                        <!--Entradas de texto-->

                        <div class="col-6 text-start mt-4">
                            <select name="cars" id="cars">
                                <option value="valorCondominio1">Condominio1</option>
                                <option value="valorCondominio2">Condominio2</option>
                                <option value="valorCondominio3">Condominio3</option>
                                <option value="valorCondominio4">Condominio4</option>
                            </select>
                        <div class="mt-3">
                            <input type="text" id="RegDeptoDireccion"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoNúmero"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoAmbientes"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoCosto"/>
                        </div>
                     
                                                                           
                    </div>
                        <div class="col-md-12 col-sm-6 mt-3 mb-3 d-flex justify-content-center">
                            <textarea id="RegDeptoDescripcion" cols="70" rows="10"></textarea> 
                        </div>
                    </div>      
                     
                    <!--Adjuntadores de imágenes--> 

                    <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 1</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj1" type="file" />
                        </div>
                    </div>
                     
                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 2</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj2" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 3</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj3" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 4</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj4" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 5</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj5" type="file" />
                        </div>
                    </div> 

                    </div> 


                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                              <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" onclick="confirmar()" value="Enviar"/>
                              </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>

        </div>

        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>         
                  
    </body>


    </html>"""
    return HttpResponse(documento)
#----------------------------------------------------------------------------------------------------------------------------------------
#Ver_datos_Departamento(Buscar)
def verDeptoBuscar(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Ver datos de departamento</title>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto;background:fixed;background-size:cover;background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvYPGmdLWr3bb8hVhzcJo5aMB-171xMvbPN0Clgi9uZiLefuTDV5cUwi976PqLzPLW5w&usqp=CAU)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background-color:royalblue;font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->
                    <div class="mt-5 mb-5 text-center" >
                        <h2>Ver datos de departamento</h2>                                              
                    </div>
                    <div class="mt-2 text-center">
                        <h5>Buscar departamento</h5>                                              
                    </div>
                </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                            <div class="mt-4 mb-2">
                                <label>Condominio</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número de departamento</label>
                            </div>                        
                        </div>
            
                        <!--Entradas de texto-->

                        <div class="col-6 text-start mt-4">
                        <select name="cars" id="cars">
                             <option value="valorCondominio1">Condominio1</option>
                             <option value="valorCondominio2">Condominio2</option>
                             <option value="valorCondominio3">Condominio3</option>
                             <option value="valorCondominio4">Condominio4</option>
                        </select>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoDireccion"/>
                        </div>
                                                                                                                     
                    </div> 
                </div> 

                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Ver_datos_departamento_formulario/">
                                <input type="button" value="Ver datos del departamento"/>
                            </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
    </div>
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                  
                  
    </body>
    </html>"""
    return HttpResponse(documento)
#--------------------------------------------------------------------------------
#Ver_datos_Departamento(Formulario)
def verDeptoFormulario(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Ver datos de de departamento</title>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto;background:fixed;background-size:cover;background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvYPGmdLWr3bb8hVhzcJo5aMB-171xMvbPN0Clgi9uZiLefuTDV5cUwi976PqLzPLW5w&usqp=CAU)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-6 col-sm-12">             
                <div style="background-color:royalblue;font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <h2>Ver datos de departamento</h2>                                              
                    </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                            <div class="mt-4 mb-2">
                                <label>Condominio</label>
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Dirección departamento</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número deptaramento</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número de ambientes</label>
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Costo de arriendo</label> 
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Descripción</label>
                            </div>
                        </div>

                        <!--Entradas de texto-->

                        <div class="col-6 text-start mt-4">
                            <input type="text" id="VerDeptoCondominio" disabled="disabled"/>
                        <div class="mt-3">
                            <input type="text" id="VerDeptoDireccion" disabled="disabled"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="VerDeptoNúmero" disabled="disabled"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="VerDeptoAmbientes" disabled="disabled"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="VerDeptoCosto" disabled="disabled"/>
                        </div>
                     
                                                                           
                    </div>
                        <div class="col-12 mt-3 mb-3">
                            <textarea id="RegDeptoDescripcion" cols="70" rows="10" disabled="disabled"></textarea> 
                        </div>
                    </div>      
                     
                    <!--Adjuntadores de imágenes--> 
                     <div class="row">
                         <div class="col-12 d-flex justify-content-center mt-5">
                            <label>Imágenes</label>
                         </div>                       
                     </div>

                    <div class="row mt-5 mx-1">
                       <div class="col-12 d-flex justify-content-center">
                            <div class=" mt-2">
                                <img width="600" height="500" src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" />
                            </div>                      
                       </div>
                    </div>

                     <div class="row mt-5 mx-1">
                       <div class="col-12 d-flex justify-content-center">
                            <div class=" mt-2">
                                <img width="600" height="500" src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" />
                            </div>                      
                       </div>
                    </div>

                    <div class="row mt-5 mx-1">
                       <div class="col-12 d-flex justify-content-center">
                            <div class=" mt-2">
                                <img width="600" height="500" src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" />
                            </div>                      
                       </div>
                    </div>

                    <div class="row mt-5 mx-1">
                       <div class="col-12 d-flex justify-content-center">
                            <div class=" mt-2">
                                <img width="600" height="500" src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" />
                            </div>                      
                       </div>
                    </div>
                        
                    <div class="row mt-5 mx-1">
                       <div class="col-12 d-flex justify-content-center">
                            <div class=" mt-2">
                                <img width="600" height="500" src="https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896" />
                            </div>                      
                       </div>
                    </div>  
                    </div>

                     <!--Botones--> 

                     <div class="row mt-5 mx-4">                    
                        <div class="col-md-12 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Aceptar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
        </div>

            <!--Footer-->
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                   
                  
    </body>
    </html>"""
    return HttpResponse(documento)
#---------------------------------------------------------------------------------------------------------------------
#ActualizarDeptoBuscar
def actualizarDeptoBuscar(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Actualizar datos de departamento</title>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto;background:fixed;background-size:cover;background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvYPGmdLWr3bb8hVhzcJo5aMB-171xMvbPN0Clgi9uZiLefuTDV5cUwi976PqLzPLW5w&usqp=CAU)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background-color:royalblue;font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->
                    <div class="mt-5 mb-5 text-center" >
                        <h2>Actualizar datos de departamento</h2>                                              
                    </div>
                    <div class="mt-2 text-center">
                        <h5>Buscar departamento</h5>                                              
                    </div>
                </div>
                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                            <div class="mt-4 mb-2">
                                <label>Condominio</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número de departamento</label>
                            </div>                        
                        </div>

                        <!--Entradas de texto-->

                        <div class="col-6 text-start mt-4">
                        <select name="cars" id="cars">
                             <option value="valorCondominio1">Condominio1</option>
                             <option value="valorCondominio2">Condominio2</option>
                             <option value="valorCondominio3">Condominio3</option>
                             <option value="valorCondominio4">Condominio4</option>
                        </select>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoDireccion"/>
                        </div>
                                                                                                                     
                    </div> 
                  </div>

                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Actualizar_datos_departamento_formulario/">
                                <input type="button" value="Actualizar datos del departamento"/>
                            </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
    </div>
         <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                   
                  
    </body>
    </html>"""
    return HttpResponse(documento)
#--------------------------------------------------------------------------------------------------------------------
#ActualizarDeptoBuscar
def actualizarDeptoFromulario(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Actualizar datos de departamento</title>
     <!--Scripts-->
        <script type="text/javascript">
        function confirmar()
        {
            var respuesta = confirm("¿Actualizar registro?");
            if (respuesta == true) {
                return true;
            }
            else {
                return false;
            }
        }
      
        </script>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto; background:fixed;background-size:cover;background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvYPGmdLWr3bb8hVhzcJo5aMB-171xMvbPN0Clgi9uZiLefuTDV5cUwi976PqLzPLW5w&usqp=CAU)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="font-family:Roboto;background-color:royalblue;font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <h2>Actualizar datos de departamento</h2>                                              
                    </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                            <div class="mt-4 mb-2">
                                <label>Condominio</label>
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Dirección departamento</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número deptaramento</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número de ambientes</label>
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Costo de arriendo</label> 
                            </div>
                            <div class="mt-4 mb-2">
                                <label>Descripción</label>
                            </div>
                        </div>

                        <!--Entradas de texto-->

                        <div class="col-6 text-start mt-4">
                            <select name="cars" id="cars">
                                <option value="valorCondominio1">Condominio1</option>
                                <option value="valorCondominio2">Condominio2</option>
                                <option value="valorCondominio3">Condominio3</option>
                                <option value="valorCondominio4">Condominio4</option>
                            </select>
                        <div class="mt-3">
                            <input type="text" id="RegDeptoDireccion"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoNúmero"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoAmbientes"/>
                        </div>
                        <div class="mt-3">
                            <input type="number" id="RegDeptoCosto"/>
                        </div>
                     
                                                                           
                    </div>
                        <div class="col-md-12 col-sm-6 mt-3 mb-3 d-flex justify-content-center">
                            <textarea id="RegDeptoDescripcion" cols="70" rows="10"></textarea> 
                        </div>
                    </div>      
                     
                    <!--Adjuntadores de imágenes--> 


                    <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 1</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj1" type="file" />
                        </div>
                    </div>
                     
                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 2</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj2" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 3</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj3" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 4</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj4" type="file" />
                        </div>
                    </div> 

                     <div class="row mx-5 mt-5 form-text text-white">
                        <div class="col-md-2 col-sm-12">
                            <label>Imagen 5</label>
                        </div>
                        <div class="col-md-10 col-sm-12">
                            <input id="ImagenAdj5" type="file" />
                        </div>
                    </div> 

                    </div> 


                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                          <a href="http://127.0.0.1:8000/Inicio_Admin/">
                            <input type="button" onclick="confirmar()" value="Actualizar"/>
                          </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
        </div>
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                   
    </body>
    </html>"""
    return HttpResponse(documento)
#--------------------------------------------------------------------------------------------------------------------
#EliminarDeptoBuscar
def eliminarDepto(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Eliminar registro de departamento</title>
     <!--Scripts-->
        <script type="text/javascript">
        function confirmar()
        {
            var respuesta = confirm("¿Eliminar registro?");
            if (respuesta == true) {
                return true;
            }
            else {
                return false;
            }
        }
      
        </script>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto;background:fixed;background-size:cover;background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvYPGmdLWr3bb8hVhzcJo5aMB-171xMvbPN0Clgi9uZiLefuTDV5cUwi976PqLzPLW5w&usqp=CAU)">

      <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background-color:royalblue;font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->
                    <div class="mt-5 mb-5 text-center" >
                        <h2>Eliminar registro de departamento</h2>                                              
                    </div>
                    <div class="mt-2 text-center">
                        <h5>Buscar departamento</h5>                                              
                    </div>
                </div>
                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                            <div class="mt-4 mb-2">
                                <label>Condominio</label>
                            </div>
                            <div class="mt-4 mb-3">
                                <label>Número de departamento</label>
                            </div>                        
                        </div>

                        <!--Entradas de texto-->

                        <div class="col-6 text-start mt-4">
                        <select name="cars" id="cars">
                             <option value="valorCondominio1">Condominio1</option>
                             <option value="valorCondominio2">Condominio2</option>
                             <option value="valorCondominio3">Condominio3</option>
                             <option value="valorCondominio4">Condominio4</option>
                        </select>
                        <div class="mt-3">
                            <input type="number" id="EliminarDeptoDireccion"/>
                        </div>
                                                                                                                     
                    </div>
                   </div> 


                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" onclick="confirmar()" value="Eliminar registro"/>
                            </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
    </div>
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #0f0c29;background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);background: linear-gradient(to right, #0f0c29, #302b63, #24243e);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                    
                  
    </body>
    </html>"""
    return HttpResponse(documento)
#------------------------------------------------------------------------------------------------------------------------


#CLIENTES**************************************

def VerDatosClienteBuscar(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Ver datos de cliente</title>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="background:fixed;background-size:cover;background-image:url(https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style=";background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background: #9D50BB;background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB); background: linear-gradient(to right, #6E48AA, #9D50BB);font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->
                    <div class="mt-5 mb-5 text-center" >
                        <h2>Ver datos de cliente</h2>                                              
                    </div>
                    <div class="mt-2 text-center mb-2">
                        <h5>Buscar cliente</h5>                                              
                    </div>
                </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-center">
                            <div class="mt-4 mb-3">
                                <label>Correo electrónico</label>
                            </div>                        
                        </div>
                  
                        <!--Entradas de texto-->

                        <div class="col-6 text-start">
                        <div class="mt-3">
                            <input type="text" id="VerCliCorreo"/>
                        </div>
                                                                                                                     
                    </div> 
                 </div>

                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Ver_datos_cliente_formulario/">
                                <input type="button" value="Ver datos del cliente"/>
                            </a> 
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>                     
                        </div>
                     </div>
                     </form>   
                    </div>
                     

                </div>
                
             
                
             </div>
                 
          </div>
            
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                
                  
    </body>
    </html>"""
    return HttpResponse(documento)
def verDatosClienteFormulario(request):

    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Ver datos de de departamento</title>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto; background:fixed;background-size:cover;background-image:url(https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style=";background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:100px;padding-bottom:100px" class="row  d-flex justify-content-center">
            
            <div class="col-md-4 col-sm-12">             
                <div style="background: #9D50BB;background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB); background: linear-gradient(to right, #6E48AA, #9D50BB);font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <h2>Datos del cliente</h2>                                           
                    </div>
                </div>
                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                        <div class="mt-4 mb-2">
                            <label>Correo electrónico</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Nombre</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Apellido paterno</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Apellido materno</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Teléfono</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Estado de cuenta</label>
                        </div>

                        </div>

                        <!--TextBox-->
                    <div class="col-6 text-start">
                    <div class="mt-4 mb-2">
                        <input type="email" disabled="disabled"/>
                    </div>                                    
                    <div  class="mt-3 mb-2">
                        <input type="text" disabled="disabled"/>
                    </div>
                    
                    
                    <div  class="mt-3 mb-2">
                        <input type="text" disabled="disabled"/>
                     </div>
                    <div  class="mt-3 mb-2">
                        <input type="text" disabled="disabled"/>
                     </div>
                    <div class="mt-3 mb-2">
                        <input type="tel" disabled="disabled"/>
                    </div>
                    <div class="mt-3 mb-2">
                        <input type="text" disabled="disabled"/>
                    </div>
                    
                    </div>
                    </div>
                   
                     

                     <!--Botones--> 

                     <div class="row mb-5 mt-5">
                             <div class="col-md-12 col col-sm-12 mt-4 d-flex justify-content-center">
                                <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                    <input type="button" value="Aceptar"/>
                                </a>
                            </div>
                        </div>
                                      
                
                 </form>

                </div>
                
                 
                
             </div>
                 
          </div>
        </div>
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                
                  
    </body>
    </html>"""
    return HttpResponse(documento)
def actualizarDatosClienteBuscar(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Actualizar datos de cliente</title>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="font-family:Roboto; background:fixed;background-size:cover;background-image:url(https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style=";background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background: #9D50BB;background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB); background: linear-gradient(to right, #6E48AA, #9D50BB);font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->
                    <div class="mt-5 mb-5 text-center" >
                        <h2>Actualizar datos de cliente</h2>                                              
                    </div>
                    <div class="mt-2 text-center mb-2">
                        <h5>Buscar cliente</h5>                                              
                    </div>
                </div>
                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-center">
                            <div class="mt-4 mb-3">
                                <label>Correo electrónico</label>
                            </div>                        
                        </div>

                        <!--Entradas de texto-->

                        <div class="col-6 text-start">
                        <div class="mt-3">
                            <input type="text" id="VerCliCorreo"/>
                        </div>
                                                                                                                     
                    </div> 
                </div>

                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Actualizar_datos_cliente_formulario/">
                                <input type="button" value="Ver datos del cliente"/>
                            </a> 
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>                     
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
    </div>
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                
                  
    </body>
    </html>"""
    return HttpResponse(documento)
def actualizarDatosClienteFormulario(request):
        documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Ver datos de de departamento</title>
        <!--Scripts-->
        <script type="text/javascript">
        function confirmar()
        {
            var respuesta = confirm("¿Actualizar cliente?");
            if (respuesta == true) {
                return true;
            }
            else {
                return false;
            }
        }
      
        </script>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="background:fixed;background-size:cover;background-image:url(https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">

   <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-4 col-sm-12">             
                <div style="background: #9D50BB;background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB); background: linear-gradient(to right, #6E48AA, #9D50BB);font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->

                    <div class="mt-5 mb-5 text-center" >
                        <h2>Actualizar datos del cliente</h2>                                           
                    </div>
                </div>

                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-start">
                        <div class="mt-4 mb-2">
                            <label>Correo electrónico</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Nombre</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Apellido paterno</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Apellido materno</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Teléfono</label>
                        </div>
                        <div class="mt-4 mb-2">
                            <label>Estado de cuenta</label>
                        </div>

                        </div>

                        <!--TextBox-->
                    <div class="col-6 text-start">
                    <div class="mt-4 mb-2">
                        <input type="email"/>
                    </div>                                    
                    <div  class="mt-3 mb-2">
                        <input type="text"/>
                    </div>
                    
                    
                    <div  class="mt-3 mb-2">
                        <input type="text"/>
                     </div>
                    <div  class="mt-3 mb-2">
                        <input type="text"/>
                     </div>
                    <div class="mt-3 mb-2">
                        <input type="tel"/>
                    </div>
                    <div class="mt-3 mb-2">
                        <input type="text"/>
                    </div>
                    
                    </div>
                    </div>
                   
                     

                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" onclick="confirmar()" value="Actualizar"/>
                            </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>
                                      
                
                 </form>

                </div>
                
                 
                
             </div>
                 
          </div>
        </div>

            <!--Footer-->
        <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                
                  
    </body>
    </html>"""
        return HttpResponse(documento)
def suspenderCliente(request):
    documento="""<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> 
    <link href="../Recursos/CSS/Estilos4.css" rel="stylesheet" />
    <title>Suspender cliente</title>
     <!--Scripts-->
        <script type="text/javascript">
        function confirmar()
        {
            var respuesta = confirm("¿Suspender cliente?");
            if (respuesta == true) {
                return true;
            }
            else {
                return false;
            }
        }
      
        </script>
    </head>
    <body>
    <div class="container-fluid fondoRegistroDepto" style="background:fixed;background-size:cover;background-image:url(https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:70px;background-size:cover">
    <a class="navbar-brand mx-5 text-white" style="font-style:italic" href="http://127.0.0.1:8000/Inicio_Admin/">
        <h4>Turismo Real</h4>
        <h6 class="text-center">Administrador</h6>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">



        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuDepartamento" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de departamentos
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Registro_departamento/">Registro de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_departamento_buscar/">Ver datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Actualizar_datos_departamento_buscar/">Actualizar datos de departamento</a></li>
            <li><a class="dropdown-item text-white" href="http://127.0.0.1:8000/Eliminar_registro_departamento/">Eliminar registro de departamento</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown mx-2" >
          <a class="nav-link dropdown-toggle text-white" href="#" id="menuCliente" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de clientes
          </a>
          <ul class="dropdown dropdown-menu dropdown-menu-dark" aria-labelledby="menuDepartamento" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a)">
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Ver_datos_cliente_buscar/">Ver datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/actualizar_datos_cliente_buscar/">Actualizar datos de cliente</a></li>
            <li><a class="dropitem dropdown-item text-white" href="http://127.0.0.1:8000/Suspender_cliente/">Suspender cliente</a></li>
          </ul>
        </li>

        </ul>
        </div>
        </nav>
       
       <div style="padding-top:200px;padding-bottom:200px" class="row  d-flex justify-content-center">
            
            <div class="col-md-5 col-sm-12">             
                <div style="background: #9D50BB;background: -webkit-linear-gradient(to right, #6E48AA, #9D50BB); background: linear-gradient(to right, #6E48AA, #9D50BB);font-family:Roboto" class="card">

                <!--Formulario-->

                 <form id="form1" runat="server">
                
                 <div class="col-md-12 col-sm-12 text-white">

                     <!--Titulo-->
                    <div class="mt-5 mb-5 text-center" >
                        <h2>Suspender cliente</h2>                                              
                    </div>
                    <div class="mt-2 text-center">
                        <h5>Buscar cliente</h5>                                              
                    </div>
                </div>
                     <!--Campos-->

                         <!--Labels-->
                    <div class="row text-center mx-5">
                        <div class="col-6 form-text text-white text-center">
                            <div class="mt-4 mb-3">
                                <label>Correo electrónico</label>
                            </div>                        
                        </div>
                        <!--Entradas de texto-->

                        <div class="col-6 text-start">
                        <div class="mt-3">
                            <input type="text" id="SuspenderCliCorreo"/>
                        </div>
                                                                                                                     
                    </div> 
                  </div> 


                     <!--Botones--> 

                     <div class="row mt-5 mx-4 ">                    
                         <div class="col-md-6 col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" onclick="confirmar()" value="Suspender cliente"/>
                            </a>
                        </div>
                        <div class="col-md-6 col col-sm-12 mt-4 mb-5 d-flex justify-content-center">
                            <a href="http://127.0.0.1:8000/Inicio_Admin/">
                                <input type="button" value="Cancelar"/>
                            </a>
                        </div>
                     </div>

                  </form>  

                </div>
                
                 
                
             </div>
                 
          </div>
    </div>
            <!--Footer-->
            
        <!--Footer-->
         <!--Footer-->
        <footer class=" card-footer flex justify-content-center" style="background: #42275a;background: -webkit-linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);background: linear-gradient(to right, #734b6d, #42275a);height:200px;background-size:cover;" >
        <div class=" d-flex justify-content-center mt-3">
        <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
        ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.google.com/gmail/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://cl.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>     

        </div>
       <div class="text-center text-white p-3" style="font-style:italic">
            © 2021 Copyright:TurismoReal
            
       </div>
            <div class="text-center text-white p-3" style="font-style:italic">
            Fono:123456789
            
       </div>
            
        </footer>                
                  
    </body>
    </html>"""
    return HttpResponse(documento)