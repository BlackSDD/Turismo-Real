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
    
    public partial class CONDUCTOR
    {
        public int RUT_CONDUC { get; set; }
        public string DV_CONDUC { get; set; }
        public string NOM_CONDUC { get; set; }
        public string APPAT_CONDUC { get; set; }
        public string APMAT_CONDUC { get; set; }
        public string EMAIL_CONDUC { get; set; }
        public int TEL_CONDUC { get; set; }
        public string PATENTE { get; set; }
        public int ID_SERV { get; set; }
    
        public virtual TRANSPORTE TRANSPORTE { get; set; }
        public virtual VEHICULO VEHICULO { get; set; }
    }
}