﻿//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Turismo.DALC
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Objects;
    using System.Data.Objects.DataClasses;
    using System.Linq;
    
    public partial class TurismoEntities : DbContext
    {
        public TurismoEntities()
            : base("name=TurismoEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<DEPARTAMENTO> DEPARTAMENTO { get; set; }
        public DbSet<REGION> REGION { get; set; }
        public DbSet<USUARIO> USUARIO { get; set; }
    
        public virtual int SP_CREATE_DEPARTAMENTO(string v_DIRECCION, Nullable<decimal> v_PRECIO, Nullable<decimal> v_NUMERO, Nullable<decimal> v_REGION_ID)
        {
            var v_DIRECCIONParameter = v_DIRECCION != null ?
                new ObjectParameter("V_DIRECCION", v_DIRECCION) :
                new ObjectParameter("V_DIRECCION", typeof(string));
    
            var v_PRECIOParameter = v_PRECIO.HasValue ?
                new ObjectParameter("V_PRECIO", v_PRECIO) :
                new ObjectParameter("V_PRECIO", typeof(decimal));
    
            var v_NUMEROParameter = v_NUMERO.HasValue ?
                new ObjectParameter("V_NUMERO", v_NUMERO) :
                new ObjectParameter("V_NUMERO", typeof(decimal));
    
            var v_REGION_IDParameter = v_REGION_ID.HasValue ?
                new ObjectParameter("V_REGION_ID", v_REGION_ID) :
                new ObjectParameter("V_REGION_ID", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_CREATE_DEPARTAMENTO", v_DIRECCIONParameter, v_PRECIOParameter, v_NUMEROParameter, v_REGION_IDParameter);
        }
    
        public virtual int SP_CREATE_REGION(string v_NOMBRE)
        {
            var v_NOMBREParameter = v_NOMBRE != null ?
                new ObjectParameter("V_NOMBRE", v_NOMBRE) :
                new ObjectParameter("V_NOMBRE", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_CREATE_REGION", v_NOMBREParameter);
        }
    
        public virtual int SP_DELETE_DEPARTAMENTO(Nullable<decimal> v_ID)
        {
            var v_IDParameter = v_ID.HasValue ?
                new ObjectParameter("V_ID", v_ID) :
                new ObjectParameter("V_ID", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_DELETE_DEPARTAMENTO", v_IDParameter);
        }
    
        public virtual int SP_DELETE_REGION(Nullable<decimal> v_ID)
        {
            var v_IDParameter = v_ID.HasValue ?
                new ObjectParameter("V_ID", v_ID) :
                new ObjectParameter("V_ID", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_DELETE_REGION", v_IDParameter);
        }
    
        public virtual int SP_UPDATE_DEPARTAMENTO(Nullable<decimal> v_ID, string v_DIRECCION, Nullable<decimal> v_PRECIO, Nullable<decimal> v_NUMERO, Nullable<decimal> v_REGION_ID)
        {
            var v_IDParameter = v_ID.HasValue ?
                new ObjectParameter("V_ID", v_ID) :
                new ObjectParameter("V_ID", typeof(decimal));
    
            var v_DIRECCIONParameter = v_DIRECCION != null ?
                new ObjectParameter("V_DIRECCION", v_DIRECCION) :
                new ObjectParameter("V_DIRECCION", typeof(string));
    
            var v_PRECIOParameter = v_PRECIO.HasValue ?
                new ObjectParameter("V_PRECIO", v_PRECIO) :
                new ObjectParameter("V_PRECIO", typeof(decimal));
    
            var v_NUMEROParameter = v_NUMERO.HasValue ?
                new ObjectParameter("V_NUMERO", v_NUMERO) :
                new ObjectParameter("V_NUMERO", typeof(decimal));
    
            var v_REGION_IDParameter = v_REGION_ID.HasValue ?
                new ObjectParameter("V_REGION_ID", v_REGION_ID) :
                new ObjectParameter("V_REGION_ID", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPDATE_DEPARTAMENTO", v_IDParameter, v_DIRECCIONParameter, v_PRECIOParameter, v_NUMEROParameter, v_REGION_IDParameter);
        }
    
        public virtual int SP_UPDATE_REGION(Nullable<decimal> v_ID, string v_NOMBRE)
        {
            var v_IDParameter = v_ID.HasValue ?
                new ObjectParameter("V_ID", v_ID) :
                new ObjectParameter("V_ID", typeof(decimal));
    
            var v_NOMBREParameter = v_NOMBRE != null ?
                new ObjectParameter("V_NOMBRE", v_NOMBRE) :
                new ObjectParameter("V_NOMBRE", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPDATE_REGION", v_IDParameter, v_NOMBREParameter);
        }
    }
}