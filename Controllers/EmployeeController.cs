using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index(){
            return View(); 
        }

        public IActionResult Create(){
            return View();
        }
        [HttpPost]

        public IActionResult Create([FromBody]Employee newEmp){
         Console.WriteLine("Creating"  + newEmp.Name + " - " + newEmp.LastName);
            Console.WriteLine("*************************Assigned ID: " + newEmp.Id);
            Data db = new Data(); //create a reference to a database
            db.Employees.Add(newEmp); //add employee to table
            db.SaveChanges(); //save changes to db 
            db.Dispose(); //close connection

           
            return Json(newEmp);
            
        }
        //return all the employees to from DB
        public IActionResult GetAll(){
            Data db = new Data();
            var list = db.Employees.ToList();// read all the elements
            db.Dispose();

            return Json(list);

        }
    }
}