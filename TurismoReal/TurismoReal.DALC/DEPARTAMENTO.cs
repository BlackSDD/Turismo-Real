//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TurismoReal.DALC
{
    using System;
    using System.Collections.Generic;
    
    public partial class DEPARTAMENTO
    {
        public DEPARTAMENTO()
        {
            this.ARTICULO = new HashSet<ARTICULO>();
            this.DISPONIBILIDAD = new HashSet<DISPONIBILIDAD>();
            this.GASTOS = new HashSet<GASTOS>();
            this.RES_MANT = new HashSet<RES_MANT>();
            this.RESERVA = new HashSet<RESERVA>();
        }
    
        public int ID_DPTO { get; set; }
        public string DIR_DPTO { get; set; }
        public short NUM_DPTO { get; set; }
        public short N_AMB_DPTO { get; set; }
        public string DESC_DPTO { get; set; }
        public int COSTO_ARRI_DPTO { get; set; }
        public byte[] IMG_1_DPTO { get; set; }
        public byte[] IMG_2_DPTO { get; set; }
        public byte[] IMG_3_DPTO { get; set; }
        public byte[] IMG_4_DPTO { get; set; }
        public byte[] IMG_5_DPTO { get; set; }
        public short ID_CND { get; set; }
    
        public virtual ICollection<ARTICULO> ARTICULO { get; set; }
        public virtual CONDOMINIO CONDOMINIO { get; set; }
        public virtual ICollection<DISPONIBILIDAD> DISPONIBILIDAD { get; set; }
        public virtual ICollection<GASTOS> GASTOS { get; set; }
        public virtual ICollection<RES_MANT> RES_MANT { get; set; }
        public virtual ICollection<RESERVA> RESERVA { get; set; }
    }
}