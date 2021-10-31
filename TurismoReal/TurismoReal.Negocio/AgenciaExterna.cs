using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class AgenciaExterna
    {

        public decimal Id_age { get; set; }
        public string Nom_age { get; set; }
        public string Email_age { get; set; }
        public decimal Tel_age { get; set; }
        public decimal Id_com { get; set; }

        public Comuna Comuna { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();

        public List<AgenciaExterna> ReadAll()
        {
            return this.db.AGENCIA_EXTERNA.Select(age => new AgenciaExterna()
            {
                Id_age = age.ID_AGENCIA,
                Nom_age = age.NOM_AGE,
                Email_age = age.EMAIL_AGE,
                Id_com = age.ID_COM,
                Comuna = new Comuna()
                {
                    Id_com = age.ID_COM,
                    Nom_com = age.COMUNA.NOM_COM,
                    Region = new Region()
                    {
                        Region_id = age.COMUNA.ID_RGN,
                        Nombre = age.COMUNA.REGION.NOM_RGN
                    }

                }
            }).ToList();
        }



        public bool Save()
        {
            try
            {
                db.SP_AGREGARAGENCIAEXTERNA(this.Nom_age,this.Email_age,this.Tel_age,this.Id_com);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public AgenciaExterna find(int Id_age)
        {

            return this.db.AGENCIA_EXTERNA.Select(age => new AgenciaExterna()
            {
                Id_age = age.ID_AGENCIA,
                Nom_age = age.NOM_AGE,
                Email_age = age.EMAIL_AGE,
                Id_com = age.ID_COM,
                Comuna = new Comuna()
                {
                    Id_com = age.ID_COM,
                    Nom_com = age.COMUNA.NOM_COM,
                    Region = new Region()
                    {
                        Region_id = age.COMUNA.ID_RGN,
                        Nombre = age.COMUNA.REGION.NOM_RGN
                    }

                }

            }).Where(age => age.Id_age == Id_age).FirstOrDefault();

        }

        public bool Update()
        {
            try
            {

                db.SP_MODIFICARAGENCIAEXTERNA(this.Id_age, this.Nom_age, this.Email_age, this.Tel_age);
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
                db.SP_ELIMINARAGENCIAEXTERNA(id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }



    }
}
