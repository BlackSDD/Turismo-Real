using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Transporte
    {

        public decimal Id_serv { get; set; }
        public decimal Cost_km_dia { get; set; }
        public decimal Cost_km_noc { get; set; }

        public ServExtra Servextra { get; set; }
        public Conductor Conductor { get; set; }
        public Vehiculo Vehiculo { get; set; }
        public Modelo Modelo { get; set; }
        public Marca Marca { get; set; }


        TurismoRealEntities db = new TurismoRealEntities();

        public List<Transporte> ReadAll()
        {
            return this.db.TRANSPORTE.Select(tra => new Transporte()
            {
                Id_serv = tra.ID_SERV,
                Cost_km_dia = tra.COST_KM_DIA,
                Cost_km_noc = tra.COST_KM_NOC
            }).ToList();
        }


        public bool Save()
        {
            try
            {
                db.SP_AGREGARTRANSPORTE(this.Id_serv,this.Cost_km_dia,this.Cost_km_noc);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Transporte find(int Id_serv)
        {

            return this.db.TRANSPORTE.Select(tra => new Transporte()
            {
                Id_serv = tra.ID_SERV,
                Cost_km_dia = tra.COST_KM_DIA,
                Cost_km_noc = tra.COST_KM_NOC

            }).Where(tra => tra.Id_serv == Id_serv).FirstOrDefault();

        }


        public bool Update()
        {
            try
            {

                db.SP_MODIFICARTRANSPORTE(this.Id_serv,this.Cost_km_dia,this.Cost_km_noc);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public bool Delete(int Id_serv)
        {
            try
            {
                db.SP_ELIMINARTRANSPORTE(Id_serv);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }



    }
}
