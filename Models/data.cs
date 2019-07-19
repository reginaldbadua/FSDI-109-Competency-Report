using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Restaurant.Models
{
    public class Data : DbContext
    { 

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Dish> Dishes { get; set;}

        // add dbsets for any other class -> table
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=blogging.db");
        }
    // any time one of the modes is changed, you need to:
        //dotnet ef migrations add <someRandomNameHere>
        //dotnet ef database update
    }

}