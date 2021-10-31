using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class CondominioController : Controller
    {
        // GET: Condominio
        public ActionResult Index()
        {
            ViewBag.condominios = new Condominio().ReadAll();
            return View();
        }

        // GET: Condominio/Details/5
        public ActionResult Details(int id)
        {
           
            return View();
        }

        // GET: Condominio/Create
        public ActionResult Create()
        {
            EnviarComunas();
            return View();
        }

        // POST: Condominio/Create
        [HttpPost]
        public ActionResult Create(Condominio condominio)
        {
            try
            {
                // TODO: Add insert logic here
                condominio.Save();
                TempData["mensaje"] = "Condominio Creada";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(condominio);
            }
        }

        // GET: Condominio/Edit/5
        public ActionResult Edit(int id)
        {
            Condominio c = new Condominio().find(id);
            if (c == null)
            {
                TempData["mensaje"] = "El condominio no se encuentra";
                return RedirectToAction("Index");
            }
            EnviarComunas();
            return View();
        }

        // POST: Condominio/Edit/5
        [HttpPost]
        public ActionResult Edit(Condominio condominio)
        {
            try
            {
                // TODO: Add update logic here
                condominio.Update();
                TempData["mensaje"] = "el condominio se ha modificado";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(condominio);
            }
        }

        // GET: Condominio/Delete/5
        public ActionResult Delete(int id)
        {
            if (new Condominio().find(id) == null)
            {
                TempData["mensaje"] = "Condominio encontrada";
                return RedirectToAction("Index");
            }


            if (new Condominio().Delete(id))
            {
                TempData["mensaje"] = "Condominio Eliminada";
                return RedirectToAction("Index");
            }
            TempData["mensaje"] = "Condominio No Eliminada";
            return RedirectToAction("Index");
        }

        // POST: Condominio/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        

        private void EnviarComunas()
        {
            ViewBag.comunas = new Comuna().ReadAll();
        }

        private void EnviarRegiones()
        {
            ViewBag.regiones = new Region().ReadAll();
        }
    }
}
