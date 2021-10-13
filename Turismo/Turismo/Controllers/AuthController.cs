using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Turismo.Negocio;
using System.Web.Security;


namespace Turismo.Controllers
{
    public class AuthController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Login(Usuario usuario, string ReturnUrl)
        {

            if(IsValid(usuario))
            {

                FormsAuthentication.SetAuthCookie(usuario.Email, false);

                if (ReturnUrl != null)
                {
                    return Redirect(ReturnUrl);
                }

                return RedirectToAction("Index", "Home");

            }

            TempData["mensaje"] = "Credenciales incorrectas";

            return View(usuario);
        }


        private bool IsValid(Usuario usuario)
        {
            return usuario.Autenticar();
        }
            
        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }




    }
}