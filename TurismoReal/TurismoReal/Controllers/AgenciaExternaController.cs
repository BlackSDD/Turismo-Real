using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class AgenciaExternaController : Controller
    {
        // GET: AgenciaExterna
        public ActionResult Index()
        {
            ViewBag.agenciaExternas = new AgenciaExterna().ReadAll(); 
            return View();
        }

        // GET: AgenciaExterna/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: AgenciaExterna/Create
        public ActionResult Create()
        {
            EnviarComunas();
            return View();
        }

        // POST: AgenciaExterna/Create
        [HttpPost]
        public ActionResult Create(AgenciaExterna agenciaExterna)
        {
            try
            {
                // TODO: Add insert logic here
                agenciaExterna.Save();
                TempData["mensaje"] = "Agencia extarna agregada";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(agenciaExterna);
            }
        }

        // GET: AgenciaExterna/Edit/5
        public ActionResult Edit(int id)
        {
            AgenciaExterna a = new AgenciaExterna().find(id);
            if (a == null)
            {
                TempData["mensaje"] = "La agencia no esta disponible";
                return RedirectToAction("Index");
            }
            EnviarComunas();
            return View(a);
        }

        // POST: AgenciaExterna/Edit/5
        [HttpPost]
        public ActionResult Edit(AgenciaExterna agenciaExterna)
        {
            try
            {
                // TODO: Add update logic here
                agenciaExterna.Update();
                TempData["mensaje"] = "La agencia se ha modificado";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(agenciaExterna);
            }
        }

        // GET: AgenciaExterna/Delete/5
        public ActionResult Delete(int id)
        {
            if (new AgenciaExterna().find(id) == null)
            {
                TempData["mensaje"] = "Agencia No encontrada";
                return RedirectToAction("Index");
            }


            if (new AgenciaExterna().Delete(id))
            {
                TempData["mensaje"] = "Agencia Eliminada";
                return RedirectToAction("Index");
            }
            TempData["mensaje"] = "Agencia No se puede Eliminar";
            return RedirectToAction("Index");
        }

        // POST: AgenciaExterna/Delete/5
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


    }
}
