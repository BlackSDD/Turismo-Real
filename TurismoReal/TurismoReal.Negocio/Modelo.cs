using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Modelo
    {

        public decimal Id_modelo { get; set; }
        public string Nom_modelo { get; set; }
        public decimal Id_marca { get; set; }

        public Marca Marca { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<Modelo> ReadAll()
        {
            return this.db.MODELO.Select(mod => new Modelo()
            {
                Id_modelo = mod.ID_MODELO,
                Nom_modelo = mod.NOMBRE_MODELO,
                Id_marca = mod.ID_MARCA,
                Marca = new Marca()
                {
                    Id_marca = mod.ID_MARCA,
                    Nom_marca = mod.MARCA.NOMBRE_MARCA
                }

            }).ToList();
        }



        public bool Save()
        {
            try
            {
                db.SP_AGREGARMODELO(this.Nom_modelo,this.Id_marca);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Modelo find(int Id_modelo)
        {

            return this.db.MODELO.Select(mod => new Modelo()
            {
                Id_modelo = mod.ID_MODELO,
                Nom_modelo = mod.NOMBRE_MODELO,
                Id_marca = mod.ID_MARCA,
                Marca = new Marca()
                {
                    Id_marca = mod.ID_MARCA,
                    Nom_marca = mod.MARCA.NOMBRE_MARCA
                }

            }).Where(mod => mod.Id_modelo == Id_modelo).FirstOrDefault();

        }

        public bool Update()
        {
            try
            {

                db.SP_MODIFICARMODELO(this.Id_modelo, this.Nom_modelo);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public bool Delete(int id)
        {
            try
            {
                db.SP_ELIMINARMODELO(id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
