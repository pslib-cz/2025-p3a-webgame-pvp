using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DrinksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public DrinksController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Food>>> GetDrinks()
        {
            var Drinks = await _context.Drinks.ToListAsync();
            return Ok(Drinks);
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
