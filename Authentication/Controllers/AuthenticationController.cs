using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Authentication.Models;

namespace Authentication.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly AuthenticationContext _context;

        public AuthenticationController(AuthenticationContext context)
        {
            _context = context;
        }

        public IActionResult Login()
        {
            return View();
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employee.Any(e => e.ID == id);
        }
    }
}
