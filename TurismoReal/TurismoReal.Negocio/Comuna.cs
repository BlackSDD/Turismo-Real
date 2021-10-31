using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Comuna
    {
        public decimal Id_com { get; set; }
        public string Nom_com { get; set; }
        public decimal Region_id { get; set; }

        public Region Region { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<Comuna> ReadAll()
        {
            return this.db.COMUNA.Select(com => new Comuna() {
                Id_com = com.ID_COM,
                Nom_com= com.NOM_COM,
                Region_id = com.ID_RGN,
                Region = new Region()
                {
                    Region_id = com.ID_RGN,
                    Nombre = com.REGION.NOM_RGN
                }
                
            }).ToList();
        }



        public bool Save()
        {
            try
            {
                db.SP_AGREGARCOMUNA(this.Nom_com, this.Region_id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Comuna find(int Id_com)
        {

            return this.db.COMUNA.Select(c => new Comuna()
            {
                Id_com = c.ID_COM,
                Nom_com = c.NOM_COM,
                Region_id = c.ID_RGN,
                Region = new Region()
                {
                    Region_id = c.ID_RGN,
                    Nombre = c.REGION.NOM_RGN
                }

            }).Where(c => c.Id_com == Id_com).FirstOrDefault();

        }

        public bool Update()
        {
            try
            {

                db.SP_MODIFICARCOMUNA(this.Id_com, this.Nom_com);
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
                db.SP_ELIMINARCOMUNA(id);
                return true;
            }
            catch (Exception)
            {

                return false ;
            }
        }


    }
}
