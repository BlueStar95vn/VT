using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Authentication.Models
{
    public class AuthenticationContext : DbContext
    {
        public AuthenticationContext (DbContextOptions<AuthenticationContext> options)
            : base(options)
        {
        }

        public DbSet<Authentication.Models.Employee> Employee { get; set; }
    }
}
