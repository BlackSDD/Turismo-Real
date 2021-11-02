using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Tour
    {

        public decimal Id_serv { get; set; }
        public decimal Dur_hra { get; set; }
        public decimal Dur_min { get; set; }
        public decimal Cost_adult { get; set; }
        public decimal Cost_nigno { get; set; }
        public decimal Cost_3ra { get; set; }
        public string Ubi_partida { get; set; }
        public string Ubi_fin { get; set; }
        public string Alimentacion { get; set; }
        public string Transporte { get; set; }


        public ServExtra Servextra { get; set; }


        TurismoRealEntities db = new TurismoRealEntities();

        public List<Tour> ReadAll()
        {
            return this.db.TOUR.Select(tou => new Tour()
            {
                Id_serv =  tou.ID_SERV,
                Dur_hra = tou.DUR_HRA,
                Dur_min = tou.DUR_MIN,
                Cost_adult = tou.COST_ADULT,
                Cost_nigno = tou.COST_NIGNO,
                Cost_3ra = tou.COST_3RA,
                Ubi_partida = tou.UBI_PARTIDA,
                Ubi_fin = tou.UBI_FIN,
                Alimentacion = tou.ALIMENTACION,
                Transporte = tou.TRANSPORTE
            }).ToList();
        }


        public bool Save()
        {
            try
            {
                db.SP_AGREGARTOUR(this.Id_serv, this.Dur_hra, this.Dur_min, this.Cost_adult, this.Cost_nigno, this.Cost_3ra,this.Ubi_partida,this.Ubi_fin,this.Alimentacion,this.Transporte);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Tour find(int Id_serv)
        {

            return this.db.TOUR.Select(tou => new Tour()
            {
                Id_serv = tou.ID_SERV,
                Dur_hra = tou.DUR_HRA,
                Dur_min = tou.DUR_MIN,
                Cost_adult = tou.COST_ADULT,
                Cost_nigno = tou.COST_NIGNO,
                Cost_3ra = tou.COST_3RA,
                Ubi_partida = tou.UBI_PARTIDA,
                Ubi_fin = tou.UBI_FIN,
                Alimentacion = tou.ALIMENTACION,
                Transporte = tou.TRANSPORTE

            }).Where(tou => tou.Id_serv == Id_serv).FirstOrDefault();

        }


        public bool Update()
        {
            try
            {

                db.SP_MODIFICARTOUR(this.Id_serv, this.Dur_hra, this.Dur_min, this.Cost_adult, this.Cost_nigno, this.Cost_3ra, this.Ubi_partida, this.Ubi_fin, this.Alimentacion, this.Transporte);
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

