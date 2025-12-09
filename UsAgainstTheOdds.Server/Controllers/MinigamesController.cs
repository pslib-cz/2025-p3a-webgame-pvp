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

        [HttpGet("{id}")]
        public async Task<ActionResult<Minigame>> GetMinigame(string id)
        {
            var minigame = await _context.Minigames
                .FirstOrDefaultAsync(m => m.MinigameId == id);

            if (minigame == null)
            {
                return NotFound();
            }

            return Ok(minigame);
        }

    }
}
