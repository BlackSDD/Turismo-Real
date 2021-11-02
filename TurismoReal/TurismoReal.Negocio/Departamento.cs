using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurismoReal.DALC;

namespace TurismoReal.Negocio
{
    public class Departamento
    {

        public decimal Id_dpto { get; set; }
        public string Dir_dpto { get; set; }
        public decimal Num_dpto { get; set; }
        public decimal N_amb_dpto { get; set; }
        public string Desc_dpto { get; set; }
        public decimal Costo_arri_dpto { get; set; }
        public byte[] Img_1_dpto { get; set; }
        public byte[] Img_2_dpto { get; set; }
        public byte[] Img_3_dpto { get; set; }
        public byte[] Img_4_dpto { get; set; }
        public byte[] Img_5_dpto { get; set; }
        public decimal Id_cnd { get; set; }

        public Condominio Condominio { get; set; }
        public COMUNA Comuna { get; set; }
        public Region Region { get; set; }

        TurismoRealEntities db = new TurismoRealEntities();


        public List<Departamento> ReadAll()
        {
            return this.db.DEPARTAMENTO.Select(dep => new Departamento()
            {
                Id_dpto = dep.ID_DPTO,
                Dir_dpto = dep.DIR_DPTO,
                Num_dpto = dep.NUM_DPTO,
                N_amb_dpto = dep.N_AMB_DPTO,
                Desc_dpto = dep.DESC_DPTO,
                Costo_arri_dpto = dep.COSTO_ARRI_DPTO,
                Img_1_dpto = dep.IMG_1_DPTO,
                Img_2_dpto = dep.IMG_2_DPTO,
                Img_3_dpto = dep.IMG_3_DPTO,
                Img_4_dpto = dep.IMG_4_DPTO,
                Img_5_dpto = dep.IMG_5_DPTO,
                Id_cnd = dep.ID_CND,
                Condominio = new Condominio()
                {

                    Id_con = dep.ID_CND,
                    Nom_con = dep.CONDOMINIO.NOM_CND,
                    Id_com = dep.CONDOMINIO.ID_COM,
                    Comuna = new Comuna()
                    {
                        Id_com = dep.CONDOMINIO.ID_COM,
                        Nom_com = dep.CONDOMINIO.COMUNA.NOM_COM,
                        Region_id = dep.CONDOMINIO.COMUNA.ID_RGN,
                        Region = new Region()
                        {
                            Region_id= dep.CONDOMINIO.COMUNA.ID_RGN,
                            Nombre = dep.CONDOMINIO.COMUNA.REGION.NOM_RGN

                        }
                    }

                }
            }).ToList();
        }


        public bool Save()
        {
            try
            {
                db.SP_AGREGARDEPARTAMENTO(this.Dir_dpto,this.Num_dpto,this.N_amb_dpto,this.Desc_dpto,this.Costo_arri_dpto,this.Img_1_dpto, this.Img_2_dpto, this.Img_3_dpto, this.Img_4_dpto, this.Img_5_dpto,this.Id_cnd);
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


        public Departamento find(int Id_dpto)
        {

            return this.db.DEPARTAMENTO.Select(dep => new Departamento()
            {
                Id_dpto = dep.ID_DPTO,
                Dir_dpto = dep.DIR_DPTO,
                Num_dpto = dep.NUM_DPTO,
                N_amb_dpto = dep.N_AMB_DPTO,
                Desc_dpto = dep.DESC_DPTO,
                Costo_arri_dpto = dep.COSTO_ARRI_DPTO,
                Img_1_dpto = dep.IMG_1_DPTO,
                Img_2_dpto = dep.IMG_2_DPTO,
                Img_3_dpto = dep.IMG_3_DPTO,
                Img_4_dpto = dep.IMG_4_DPTO,
                Img_5_dpto = dep.IMG_5_DPTO,
                Id_cnd = dep.ID_CND,
                Condominio = new Condominio()
                {

                    Id_con = dep.ID_CND,
                    Nom_con = dep.CONDOMINIO.NOM_CND,
                    Id_com = dep.CONDOMINIO.ID_COM,
                    Comuna = new Comuna()
                    {
                        Id_com = dep.CONDOMINIO.ID_COM,
                        Nom_com = dep.CONDOMINIO.COMUNA.NOM_COM,
                        Region_id = dep.CONDOMINIO.COMUNA.ID_RGN,
                        Region = new Region()
                        {
                            Region_id = dep.CONDOMINIO.COMUNA.ID_RGN,
                            Nombre = dep.CONDOMINIO.COMUNA.REGION.NOM_RGN

                        }
                    }

                }
            }).Where(dep =>dep.Id_dpto == Id_dpto).FirstOrDefault();

        }



        public bool Update()
        {
            try
            {

                db.SP_MODIFICARDEPARTAMENTO(this.Id_dpto,this.Dir_dpto, this.Num_dpto, this.N_amb_dpto, this.Desc_dpto, this.Costo_arri_dpto, this.Img_1_dpto, this.Img_2_dpto, this.Img_3_dpto, this.Img_4_dpto, this.Img_5_dpto);
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
                db.SP_ELIMINARDEPARTAMENTO(id);
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }



    }
}
