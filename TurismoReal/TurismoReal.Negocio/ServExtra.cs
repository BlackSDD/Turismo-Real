using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class ServExtra
    {
        public decimal Id_serv { get; set; }
        public string Nom_serv { get; set; }
        public string Tipo_serv { get; set; }
        public string Desc_serv { get; set; }
        public decimal Id_agencia { get; set; }

        public AgenciaExterna Agenciaexterna { get; set; }
        public Comuna Comuna { get; set; }
        public Region Region { get; set; }


        TurismoRealEntities db = new TurismoRealEntities();

        public List<ServExtra> ReadAll()
        {
            return this.db.SERVEXTRAS.Select(ser => new ServExtra()
            {
                Id_serv = ser.ID_SERV,
                Nom_serv = ser.NOM_SERV,
                Tipo_serv = ser.TIPO_SERV,
                Desc_serv = ser.DESC_SERV,
                Id_agencia = ser.ID_AGENCIA,
                Agenciaexterna = new AgenciaExterna(){
                    Id_age = ser.ID_AGENCIA,
                    Nom_age = ser.AGENCIA_EXTERNA.NOM_AGE,
                    Email_age = ser.AGENCIA_EXTERNA.EMAIL_AGE,
                    Id_com = ser.AGENCIA_EXTERNA.ID_COM,
                    Comuna = new Comuna()
                    {
                        Id_com = ser.AGENCIA_EXTERNA.ID_COM,
                        Nom_com = ser.AGENCIA_EXTERNA.COMUNA.NOM_COM,
                        Region_id = ser.AGENCIA_EXTERNA.COMUNA.ID_RGN,
                        Region = new Region()
                        {
                            Region_id = ser.AGENCIA_EXTERNA.COMUNA.ID_RGN,
                            Nombre = ser.AGENCIA_EXTERNA.COMUNA.REGION.NOM_RGN

                        }
                    }
                    
                }

            }).ToList();
        }


        public bool Save()
        {
            try
            {
                db.SP_AGREGARSERVEXTRAS(this.Nom_serv,this.Tipo_serv,this.Desc_serv,this.Id_agencia);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public ServExtra find(int Id_serv)
        {

            return this.db.SERVEXTRAS.Select(ser => new ServExtra()
            {
                Id_serv = ser.ID_SERV,
                Nom_serv = ser.NOM_SERV,
                Tipo_serv = ser.TIPO_SERV,
                Desc_serv = ser.DESC_SERV,
                Id_agencia = ser.ID_AGENCIA,
                Agenciaexterna = new AgenciaExterna()
                {
                    Id_age = ser.ID_AGENCIA,
                    Nom_age = ser.AGENCIA_EXTERNA.NOM_AGE,
                    Email_age = ser.AGENCIA_EXTERNA.EMAIL_AGE,
                    Id_com = ser.AGENCIA_EXTERNA.ID_COM,
                    Comuna = new Comuna()
                    {
                        Id_com = ser.AGENCIA_EXTERNA.ID_COM,
                        Nom_com = ser.AGENCIA_EXTERNA.COMUNA.NOM_COM,
                        Region_id = ser.AGENCIA_EXTERNA.COMUNA.ID_RGN,
                        Region = new Region()
                        {
                            Region_id = ser.AGENCIA_EXTERNA.COMUNA.ID_RGN,
                            Nombre = ser.AGENCIA_EXTERNA.COMUNA.REGION.NOM_RGN

                        }
                    }

                }

            }).Where(sev => sev.Id_serv == Id_serv).FirstOrDefault();

        }



        public bool Update()
        {
            try
            {

                db.SP_MODIFICARSERVEXTRAS(this.Id_serv,this.Nom_serv,this.Desc_serv);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }



        public bool Delete()
        {
            try
            {

                db.SP_ELIMINARSERVEXTRAS(this.Id_serv);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }



    }
}
