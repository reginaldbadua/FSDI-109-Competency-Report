using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restaurant.Models;

namespace Restaurant.Controllers
{
    public class DishController : Controller
    {
        public IActionResult Create()
        {
            Console.WriteLine("Sending Create View");
            return View();
        }
        [HttpPost]
        public IActionResult Create([FromBody]Dish newDish)
        {
            var db = new Data();
            db.Dishes.Add(newDish);
            db.SaveChanges();
            db.Dispose();

            Console.WriteLine("******New Dish: " + newDish.Name);
            Console.WriteLine("********Description: " + newDish.Description);
            return Json(newDish);
        }

        public IActionResult List()
        {
            return View();
        }
        public IActionResult GetAll()
        {
            Data db = new Data();
            var list = db.Dishes.ToList();// read all the elements
            db.Dispose();

            return Json(list);
        }

        /*
        - define the Get method for Create action - check
        - create the view page inside a Dish folder - check
        - create the menu item - check
        - create the model for Dish - check
            - Name
            - Description
            - Price
            - ImageUrl
            - Vegan (true/false)
        - create the capture form on the view (rename variables)
        - define the HTTP Post for Create
        - Send the data
         */
    }
}

