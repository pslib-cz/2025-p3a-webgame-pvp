using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public FoodsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Food>>> GetFoods()
        {
            var Foods =  await _context.Foods.ToListAsync();
            return Ok(Foods);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Food>> GetFood(string id)
        {
            var Food = await _context.Foods
                .FirstOrDefaultAsync(f => f.FoodId == id);

            if (Food == null)
            {
                return NotFound();
            }

            return Ok(Food);
        }

    }
}
