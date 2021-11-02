using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Conductor
    {

        public decimal Rut_conductor { get; set; }
        public string Dv_conductor { get; set; }
        public string Nom_conductor { get; set; }
        public string Ap_pat_conductor { get; set; }
        public string Ap_mat_conductor { get; set; }
        public string Email_conductor { get; set; }
        public decimal Tel_conductor { get; set; }
        public string Patente { get; set; }
        public decimal Id_serv { get; set; }

        public Vehiculo Vehiculo { get; set; }
        public Modelo Modelo { get; set; }
        public Marca Marca { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<Conductor> ReadAll()
        {
            return this.db.CONDUCTOR.Select(con => new Conductor()
            {
                Rut_conductor = con.RUT_CONDUC,
                Dv_conductor = con.DV_CONDUC,
                Nom_conductor = con.NOM_CONDUC,
                Ap_pat_conductor = con.APPAT_CONDUC,
                Ap_mat_conductor = con.APMAT_CONDUC,
                Email_conductor = con.EMAIL_CONDUC,
                Tel_conductor = con.TEL_CONDUC,
                Patente = con.PATENTE,
                Vehiculo = new Vehiculo()
                {
                    Patente = con.PATENTE,
                    Color = con.VEHICULO.COLOR,
                    Agno = con.VEHICULO.AGNO,
                    Cant_puertas = con.VEHICULO.CANT_PUERTAS,
                    Cap_pasaj = con.VEHICULO.CAP_PASAJ,
                    Cap_male = con.VEHICULO.CAP_MALE,
                    Asiento_nigno = con.VEHICULO.ASIENTO_NIGNO,
                    Per_silla = con.VEHICULO.PER_SILLA,
                    Id_modelo = con.VEHICULO.ID_MODELO,
                    Modelo = new Modelo()
                    {
                        Id_modelo = con.VEHICULO.ID_MODELO,
                        Nom_modelo = con.VEHICULO.MODELO.NOMBRE_MODELO,
                        Id_marca = con.VEHICULO.MODELO.ID_MARCA,
                        Marca = new Marca()
                        {
                            Id_marca = con.VEHICULO.MODELO.ID_MARCA,
                            Nom_marca = con.VEHICULO.MODELO.MARCA.NOMBRE_MARCA
                        }
                    }
                }
            }).ToList();





        }



    }
}
