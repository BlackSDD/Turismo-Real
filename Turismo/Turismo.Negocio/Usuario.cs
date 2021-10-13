using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Turismo.DALC;

namespace Turismo.Negocio
{
    public class Usuario
    {
        public decimal Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime UltimaConexion { get; set; }

        TurismoEntities db = new TurismoEntities();

        public bool Autenticar()
        {
            return db.USUARIO
                
                .Where(u => u.EMAIL == this.Email
                       && u.PASSWORD == this.Password)
                
                .FirstOrDefault() != null;

        }

    }
}
