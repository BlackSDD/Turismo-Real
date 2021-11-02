using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TurismoReal.Negocio;

namespace TurismoReal.Controllers
{
    public class DepartamentoController : Controller
    {
        // GET: Departamento
        public ActionResult Index()
        {
            ViewBag.departamentos = new Departamento().ReadAll();
            return View();
        }

        // GET: Departamento/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Departamento/Create
        public ActionResult Create()
        {
            ViewBag.condominios = new Condominio().ReadAll();
            return View();
        }

        // POST: Departamento/Create
        [HttpPost]
        public ActionResult Create(Departamento departamento)
        {
            try
            {
                departamento.Save();
                TempData["mensaje"] = "Marca Agregada";
                

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Departamento/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Departamento/Edit/5
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

        // GET: Departamento/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Departamento/Delete/5
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
