using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DrinkController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public DrinkController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Drink>> GetDrink(string id)
        {
            var Drink = await _context.Drinks
                .FirstOrDefaultAsync(m => m.DrinkId == id);

            if (Drink == null)
            {
                return NotFound();
            }

            return Ok(Drink);
        }

    }
}
