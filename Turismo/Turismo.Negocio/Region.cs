using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Turismo.DALC;

namespace Turismo.Negocio
{
    public class Region
    {

        public decimal Id { get; set; }
        public string Nombre { get; set; }

        TurismoEntities db = new TurismoEntities();

       
        public List<Region> ReadAll()
        {

            return db.REGION.Select(r => new Region()
            {

                Id = r.REGION_ID,
                Nombre = r.NOMBRE

            }).ToList();

        }


    }

}
