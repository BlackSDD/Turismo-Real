using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Marca
    {
        public decimal Id_marca { get; set; }
        public string Nom_marca { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<Marca> ReadAll()
        {
            return this.db.MARCA.Select(mar => new Marca()
            {

                Id_marca = mar.ID_MARCA,
                Nom_marca = mar.NOMBRE_MARCA

            }).ToList();
        }



        public bool Save()
        {
            try
            {
                db.SP_AGREGARMARCA(this.Nom_marca);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Marca find(int Id_marca)
        {

            return this.db.MARCA.Select(mar => new Marca()
            {

                Id_marca = mar.ID_MARCA,
                Nom_marca = mar.NOMBRE_MARCA

            }).Where(mar => mar.Id_marca == Id_marca).FirstOrDefault();

        }

        public bool Update()
        {
            try
            {

                db.SP_MODIFICARMARCA(this.Id_marca, this.Nom_marca);
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
                db.SP_ELIMINARMARCA(id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }



    }
}
