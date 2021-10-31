using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class MarcaController : Controller
    {
        // GET: Marca
        public ActionResult Index()
        {
            ViewBag.marcas = new Marca().ReadAll();
            return View();
        }

        // GET: Marca/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Marca/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Marca/Create
        [HttpPost]
        public ActionResult Create(Marca marca)
        {
            try
            {
                // TODO: Add insert logic here
                marca.Save();
                TempData["mensaje"] = "Marca Agregada";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(marca);
            }
        }

        // GET: Marca/Edit/5
        public ActionResult Edit(int id)
        {
            Marca mar = new Marca().find(id);
            if (mar == null)
            {
                TempData["mensaje"] = "La Marca no esta disponible";
                return RedirectToAction("Index");
            }
            return View(mar);
        }

        // POST: Marca/Edit/5
        [HttpPost]
        public ActionResult Edit(Marca marca)
        {
            try
            {
                // TODO: Add update logic here
                marca.Update();
                TempData["mensaje"] = "La marca se ha modificado";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(marca);
            }
        }

        // GET: Marca/Delete/5
        public ActionResult Delete(int id)
        {
            if (new Marca().find(id) == null)
            {
                TempData["mensaje"] = "Marca No encontrada";
                return RedirectToAction("Index");
            }


            if (new Marca().Delete(id))
            {
                TempData["mensaje"] = "Marca Eliminada";
                return RedirectToAction("Index");
            }
            TempData["mensaje"] = "Marca No Eliminada";
            return RedirectToAction("Index");
        }

        // POST: Marca/Delete/5
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
