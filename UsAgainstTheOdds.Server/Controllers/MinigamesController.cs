using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MinigamesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public MinigamesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Minigame>>> GetMinigames()
        {
            List<Minigame> ingredients = await _context.Minigames.ToListAsync();
            return Ok(ingredients);
        }

    }
}
