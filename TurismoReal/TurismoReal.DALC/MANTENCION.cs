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
    
    public partial class MANTENCION
    {
        public int ID_RMANT { get; set; }
        public int COST_MANT { get; set; }
        public string DETA_MANT { get; set; }
    
        public virtual RES_MANT RES_MANT { get; set; }
    }
}
