using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ItemsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Item>>> GetItems()
        {
            var Items = await _context.Items.ToListAsync();
            return Ok(Items);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(string id)
        {
            var Drink = await _context.Items
                .FirstOrDefaultAsync(m => m.ItemId == id);

            if (Drink == null)
            {
                return NotFound();
            }

            return Ok(Drink);
        }

    }
}
    