using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Threading.Tasks;
using Turismo.DALC;

namespace Turismo.Negocio
{

    public class Departamento
    {

        public decimal Id { get; set; }
        [Required, MinLength(10, ErrorMessage ="La Dirección debe tener mínimo 10 caracteres"), MaxLength(100, ErrorMessage ="La Dirección debe tener un máximo de 100 caracteres")]
        public string Direccion { get; set; }
        [Required, Range(1, 999999999, ErrorMessage ="El Precio debe estar entre ${1} y ${2}")]
        public decimal Precio { get; set; }
        [Required, Range(1, 9999,ErrorMessage = "El Número del departamento debe estar entre {1} y {2}")]
        public decimal Numero { get; set; }
        public decimal RegionId { get; set; }


        public Region Region { get; set; }

        TurismoEntities db = new TurismoEntities();

        public List<Departamento> ReadAll()
        {

            return this.db.DEPARTAMENTO.Select(d => new Departamento()
            {

                Id = d.DEPARTAMENTO_ID,
                Direccion = d.DIRECCION_DEPARTAMENTO,
                Precio = (decimal)d.PRECIO_DEPARTAMENTO,
                Numero = (decimal)d.NUMERO_DEPARTAMENTO,
                RegionId = (decimal)d.REGION_REGION_ID,

                Region = new Region()
                {

                    Id = (decimal)d.REGION_REGION_ID,
                    Nombre = d.REGION.NOMBRE

                }

            }).ToList();

        }


        public bool Save()
        {
            try
            {//llamo al procedure create

                db.SP_CREATE_DEPARTAMENTO(this.Direccion, this.Precio, this.Numero, this.RegionId);
                return true;

            }
            catch (Exception)
            {

                return false;
            }

        }


        public Departamento Find(int id)
        {

            return this.db.DEPARTAMENTO.Select(d => new Departamento()
            {

                Id = d.DEPARTAMENTO_ID,
                Direccion = d.DIRECCION_DEPARTAMENTO,
                Precio = d.PRECIO_DEPARTAMENTO,
                Numero = d.NUMERO_DEPARTAMENTO,
                RegionId = d.REGION_REGION_ID,

                Region = new Region()
                {

                    Id = d.REGION_REGION_ID,
                    Nombre = d.REGION.NOMBRE

                }

            }).Where(d => d.Id == id).FirstOrDefault();

        }


        public bool Update()
        {

            try
            {
                db.SP_UPDATE_DEPARTAMENTO(this.Id, this.Direccion, this.Precio, this.Numero, this.RegionId);
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
                db.SP_DELETE_DEPARTAMENTO(id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }



    }


}
