using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Region
    {
        public decimal Region_id { get; set; }
        public string Nombre { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();


        public List<Region> ReadAll()
        {
            return this.db.REGION.Select(r => new Region()
            {
                Region_id = r.ID_RGN,
                Nombre = r.NOM_RGN,
               
                
            }).ToList();
        }





    }

}

