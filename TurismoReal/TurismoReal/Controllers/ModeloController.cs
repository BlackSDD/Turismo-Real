using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;


namespace TurismoReal.Controllers
{
    public class ModeloController : Controller
    {
        // GET: Modelo
        public ActionResult Index()
        {
            ViewBag.modelos = new Modelo().ReadAll();
            return View();
        }

        // GET: Modelo/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Modelo/Create
        public ActionResult Create()
        {
            EnviarMarcas();

            return View();
        }

        // POST: Modelo/Create
        [HttpPost]
        public ActionResult Create(Modelo modelo)
        {
            try
            {
                // TODO: Add insert logic here
                modelo.Save();
                TempData["mensaje"] = "Modelo añadido";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(modelo);
            }
        }

        // GET: Modelo/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Modelo/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Modelo/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Modelo/Delete/5
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

        private void EnviarMarcas()
        {
            ViewBag.marcas = new Marca().ReadAll();
        }


    }
}
