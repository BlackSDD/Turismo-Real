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
    
    public partial class AGENCIA_EXTERNA
    {
        public AGENCIA_EXTERNA()
        {
            this.SERVEXTRAS = new HashSet<SERVEXTRAS>();
        }
    
        public int ID_AGENCIA { get; set; }
        public string NOM_AGE { get; set; }
        public string EMAIL_AGE { get; set; }
        public int TEL_AGE { get; set; }
        public short ID_COM { get; set; }
    
        public virtual COMUNA COMUNA { get; set; }
        public virtual ICollection<SERVEXTRAS> SERVEXTRAS { get; set; }
    }
}