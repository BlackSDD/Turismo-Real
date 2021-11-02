using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class ConductorController : Controller
    {
        // GET: Conductor
        public ActionResult Index()
        {
            ViewBag.conductores = new Conductor().ReadAll();
            return View();
        }

        // GET: Conductor/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Conductor/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Conductor/Create
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

        // GET: Conductor/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Conductor/Edit/5
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

        // GET: Conductor/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Conductor/Delete/5
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
