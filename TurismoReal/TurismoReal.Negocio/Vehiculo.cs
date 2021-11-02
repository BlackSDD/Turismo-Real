using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Vehiculo
    {

        public string Patente { get; set; }
        public string Color { get; set; }
        public DateTime Agno { get; set; }
        public decimal Cant_puertas { get; set; }
        public decimal Cap_pasaj { get; set; }
        public decimal Cap_male { get; set; }
        public string Asiento_nigno { get; set; }
        public string Per_silla { get; set; }
        public decimal Id_modelo { get; set; }

        public Modelo Modelo { get; set; }
        public Marca Marca { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<Vehiculo> ReadAll()
        {
            return this.db.VEHICULO.Select(veh => new Vehiculo()
            {
                Patente = veh.PATENTE,
                Color = veh.COLOR,
                Agno = veh.AGNO,
                Cant_puertas = veh.CANT_PUERTAS,
                Cap_pasaj = veh.CAP_PASAJ,
                Cap_male = veh.CAP_MALE,
                Asiento_nigno = veh.ASIENTO_NIGNO,
                Per_silla = veh.PER_SILLA,
                Id_modelo = veh.ID_MODELO,

                Modelo = new Modelo()
                {
                    Id_modelo = veh.ID_MODELO,
                    Nom_modelo =veh.MODELO.NOMBRE_MODELO,

                    Marca = new Marca()
                    {
                        Id_marca = veh.MODELO.ID_MARCA,
                        Nom_marca = veh.MODELO.MARCA.NOMBRE_MARCA
                       
                    }

                }

            }).ToList();
        }

        public bool Save()
        {
            try
            {
                db.SP_AGREGARVEHICULO(this.Patente, this.Color, this.Agno, this.Cant_puertas, this.Cap_pasaj, this.Cap_male, this.Asiento_nigno, this.Per_silla,this.Id_modelo);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Vehiculo find(string Patente)
        {

            return this.db.VEHICULO.Select(veh => new Vehiculo()
            {
                Patente = veh.PATENTE,
                Color = veh.COLOR,
                Agno = veh.AGNO,
                Cant_puertas = veh.CANT_PUERTAS,
                Cap_pasaj = veh.CAP_PASAJ,
                Cap_male = veh.CAP_MALE,
                Asiento_nigno = veh.ASIENTO_NIGNO,
                Per_silla = veh.PER_SILLA,
                Id_modelo = veh.ID_MODELO,

                Modelo = new Modelo()
                {
                    Id_modelo = veh.ID_MODELO,
                    Nom_modelo = veh.MODELO.NOMBRE_MODELO,

                    Marca = new Marca()
                    {
                        Id_marca = veh.MODELO.ID_MARCA,
                        Nom_marca = veh.MODELO.MARCA.NOMBRE_MARCA

                    }

                }

            }).Where(veh => veh.Patente == Patente).FirstOrDefault();

        }

        public bool Update()
        {
            try
            {

                db.SP_MODIFICARVEHICULO(this.Patente, this.Color, this.Agno, this.Cant_puertas, this.Cap_pasaj, this.Cap_male,this.Asiento_nigno,this.Per_silla);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public bool Delete(string patente)
        {
            try
            {
                db.SP_ELIMINARVEHICULO(patente);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }


    }
}
