from django.shortcuts import render
from django.db import connection

# Create your views here.
def region(request):
    print(listado_regiones())
    return render(request, 'core/region.html')



def listado_regiones():
    django_cursor = connection.cursor()
    cursor = django_cursor.connection.cursor()
    out_cur = django_cursor.connection.cursor()

    cursor.callreg("SP_LISTAREGION", [out_cur])

    lista = []
    for fila in out_cur:
        lista.append(fila)
        return lista