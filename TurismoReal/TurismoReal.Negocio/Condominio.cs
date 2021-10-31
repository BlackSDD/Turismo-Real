using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Condominio
    {
        public decimal Id_con { get; set; }
        public string Nom_con { get; set; }
        public decimal Id_com { get; set; }
        public decimal Region_id { get; set; }

        public Comuna Comuna { get; set; }
        public Region Region { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<Condominio> ReadAll()
        {
            return this.db.CONDOMINIO.Select(con => new Condominio()
            {
                Id_con = con.ID_CND,
                Nom_con = con.NOM_CND,
                Id_com = con.ID_COM,
                Comuna = new Comuna()
                {
                    Id_com =  con.ID_COM,
                    Nom_com = con.COMUNA.NOM_COM,
                    Region = new Region() {
                        Region_id = con.COMUNA.ID_RGN,
                        Nombre = con.COMUNA.REGION.NOM_RGN
                    }

                }

            }).ToList();
        }



        public bool Save()
        {
            try
            {
                db.SP_AGREGARCONDOMINIO(this.Nom_con,this.Id_com);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Condominio find(int Id_con)
        {

            return this.db.CONDOMINIO.Select(con => new Condominio()
            {
                Id_con = con.ID_CND,
                Nom_con = con.NOM_CND,
                Id_com = con.ID_COM,
                Comuna = new Comuna()
                {
                    Id_com = con.ID_COM,
                    Nom_com = con.COMUNA.NOM_COM,
                    Region = new Region()
                    {
                        Region_id = con.COMUNA.ID_RGN,
                        Nombre = con.COMUNA.REGION.NOM_RGN

                    }
                }

            }).Where(con => con.Id_con == Id_con).FirstOrDefault();

        }

        public bool Update()
        {
            try
            {

                db.SP_MODIFICARCONDOMINIO(this.Id_con, this.Nom_con);
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
                db.SP_ELIMINARCONDOMINIO(id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }


    }
}
