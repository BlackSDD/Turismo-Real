"""Vista_web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from Vista_web.views import Login, actualizarDeptoBuscar, menuAdmin, registroCuenta, registroDepartamento, verDeptoBuscar, verDeptoFormulario, actualizarDeptoBuscar, actualizarDeptoFromulario, eliminarDepto, VerDatosClienteBuscar, verDatosClienteFormulario, actualizarDatosClienteBuscar, actualizarDatosClienteFormulario, suspenderCliente

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Login/', Login),
    path('Registro_Cuenta/', registroCuenta),
    path('Inicio_Admin/', menuAdmin),

    #Departamentos***********
    path('Registro_departamento/', registroDepartamento),
    path('Ver_datos_departamento_buscar/', verDeptoBuscar),
    path('Ver_datos_departamento_formulario/', verDeptoFormulario),
    path('Actualizar_datos_departamento_buscar/', actualizarDeptoBuscar),
    path('Actualizar_datos_departamento_formulario/', actualizarDeptoFromulario),
    path('Eliminar_registro_departamento/', eliminarDepto),

    #Clientes***************
    path('Ver_datos_cliente_buscar/', VerDatosClienteBuscar),
    path('Ver_datos_cliente_formulario/', verDatosClienteFormulario),
    path('actualizar_datos_cliente_buscar/', actualizarDatosClienteBuscar),
    path('Actualizar_datos_cliente_formulario/', actualizarDatosClienteFormulario),
    path('Suspender_cliente/', suspenderCliente),
]
