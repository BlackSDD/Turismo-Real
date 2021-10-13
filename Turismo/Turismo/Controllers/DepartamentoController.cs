using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Turismo.Negocio;

namespace Turismo.Controllers
{
    [Authorize]
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
            EnviarRegiones();
            return View();
        }

        private void EnviarRegiones()
        {
            ViewBag.region = new Region().ReadAll();
        }

        // POST: Departamento/Create
        [HttpPost]
        public ActionResult Create([Bind(Include = "Direccion,Precio,Numero,RegionId")]Departamento departamento)
        {
            try
            {
                // TODO: Add insert logic here
                if (!ModelState.IsValid)
                {
                    EnviarRegiones();
                    return View(departamento);
                }
                departamento.Save();
                TempData["mensaje"] = "Se ha creado un nuevo departamento con éxito";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(departamento);
            }
        }

       // GET: Departamento/Edit/5
        public ActionResult Edit(int id)
        {
            Departamento d = new Departamento().Find(id);

            if (d == null)
            {
                TempData["Mensaje"] = "Departamento no encontrado";
                return RedirectToAction("Index");
            }
            ViewBag.regiones = new Region().ReadAll();

            return View(d);
        }

        // POST: Departamento/Edit/5
        [HttpPost]
        public ActionResult Edit([Bind(Include = "Id,Direccion,Precio,Numero,RegionId")]Departamento departamento)
        {
            try
            {
                if(!ModelState.IsValid)
                {
                    EnviarRegiones();
                    return View(departamento);
                }
                // TODO: Add update logic here
                departamento.Update();
                TempData["mensaje"] = "Departamento Modificado con éxito";
                return RedirectToAction("Index");
            }
            catch
            {
                return View(departamento);
            }
        }

        // GET: Departamento/Delete/5
        public ActionResult Delete(int id)
        {

            if (new Departamento().Find(id)==null)
            {
                
                TempData["mensaje"] = "Departamento no encontrado";
                return RedirectToAction("Index");
            }

            if(new Departamento().Delete(id))
            {
                TempData["mensaje"] = "Departamento Eliminado";
                return RedirectToAction("Index");

            }
            TempData["mensaje"] = "No se pudo realizar accion";
            return RedirectToAction("Index");
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
