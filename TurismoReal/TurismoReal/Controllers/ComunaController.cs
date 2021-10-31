using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class ComunaController : Controller
    {
        // GET: Comuna
        public ActionResult Index()
        {
            ViewBag.comunas = new Comuna().ReadAll();
            return View();
        }

        // GET: Comuna/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Comuna/Create
        public ActionResult Create()
        {
            EnviarRegiones();
            return View();
        }

        private void EnviarRegiones()
        {
            ViewBag.regiones = new Region().ReadAll();
        }

        // POST: Comuna/Create
        [HttpPost]
        public ActionResult Create(Comuna comuna)
        {
            try
            {
                // TODO: Add insert logic here
                comuna.Save();
                TempData["mensaje"] = "Comuna Creada";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(comuna);
            }
        }

        // GET: Comuna/Edit/5
        public ActionResult Edit(int id)
        {
            Comuna c = new Comuna().find(id);
            if (c == null)
            {
                TempData["mensaje"] = "La comuna no se encuentra";
                return RedirectToAction("Index");
            }
            EnviarRegiones();
            return View(c);
        }

        // POST: Comuna/Edit/5
        [HttpPost]
        public ActionResult Edit(Comuna comuna)
        {
            try
            {
                // TODO: Add update logic here
                comuna.Update();
                TempData["mensaje"] = "La comuna se ha modificado";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(comuna);
            }
        }

        // GET: Comuna/Delete/5
        public ActionResult Delete(int id)
        {
            if (new Comuna().find(id) == null)
            {
                TempData["mensaje"] = "Comuna No encontrada";
                return RedirectToAction("Index");
            }


            if (new Comuna().Delete(id))
            {
                TempData["mensaje"] = "Comuna Eliminada";
                return RedirectToAction("Index");
            }
            TempData["mensaje"] = "Comuna No Eliminada";
            return RedirectToAction("Index");
        }

        // POST: Comuna/Delete/5
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
    }
}
