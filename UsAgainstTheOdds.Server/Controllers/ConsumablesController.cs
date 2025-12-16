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

        //https://localhost:7222/api/consumables
        [HttpGet]
        public async Task<ActionResult<List<Consumable>>> GetConsumables()
        {
            var Consumables = await _context.Consumables.ToListAsync();
            return Ok(Consumables);
        }


        //https://localhost:7222/api/consumables/{id}
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


        //https://localhost:7222/api/consumables/type/{type}
        [HttpGet("type/{type}")]
        public async Task<ActionResult<List<Consumable>>> GetConsumablesByType(Consumable.ConsumableType type)
        {
            if (!Enum.IsDefined(typeof(Consumable.ConsumableType), type))
            {
                return BadRequest("Invalid consumable type.");
            }
            var consumables = await _context.Consumables
                .Where(c=> c.Type == type).ToListAsync();

            return Ok(consumables);
        }
    }
}
