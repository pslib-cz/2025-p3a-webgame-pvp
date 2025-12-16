using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsumablesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ConsumablesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Consumable>>> GetConsumables()
        {
            var Consumables = await _context.Consumables.ToListAsync();
            return Ok(Consumables);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Consumable>> GetConsumable(string id)
        {
            var Consumable = await _context.Consumables
                .FirstOrDefaultAsync(m => m.ConsumableId == id);

            if (Consumable == null)
            {
                ;   
                return NotFound();
            }

            return Ok(Consumable);
        }
    }
}
