using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class ServicioExtraController : Controller
    {
        // GET: ServicioExtra
        public ActionResult Index()
        {
            EnviarServicio();
            return View();
        }

        // GET: ServicioExtra/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ServicioExtra/Create
        public ActionResult Create()
        {
            EnviarAgencias();
            return View();
        }

        // POST: ServicioExtra/Create
        [HttpPost]
        public ActionResult Create(ServExtra serv)
        {
            try
            {
                // TODO: Add insert logic here
                serv.Save();
                TempData["mensaje"] = "Condominio Creada";
                return RedirectToAction("Index");
            }
            catch
            {
                return View("Index");
            }
        }

        // GET: ServicioExtra/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ServicioExtra/Edit/5
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

        // GET: ServicioExtra/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ServicioExtra/Delete/5
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

        private void EnviarServicio()
        {
            ViewBag.servicios = new ServExtra().ReadAll();
        }

        private void EnviarAgencias()
        {
            ViewBag.agencias = new AgenciaExterna().ReadAll();
        }

    }
}
