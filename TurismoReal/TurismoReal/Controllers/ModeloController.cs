using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TurismoReal.Controllers
{
    public class ModeloController : Controller
    {
        // GET: Modelo
        public ActionResult Index()
        {
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
            return View();
        }

        // POST: Modelo/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
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
    }
}
