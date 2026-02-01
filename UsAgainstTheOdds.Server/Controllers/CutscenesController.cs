using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CutscenesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CutscenesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cutscene>>> GetCutscenes()
        {
            var cutscenes = await _context.Cutscenes.ToListAsync();
            return Ok(cutscenes);
        }

        [HttpGet("{type}")]
        public async Task<ActionResult<Cutscene>> GetCutsceneByType(string type)
        {
            var cutscenes = await _context.Cutscenes
                .Where(m => m.Type.ToLower() == type.ToLower())
                .ToListAsync();

            if (cutscenes == null || cutscenes.Count == 0)
            {
                return NotFound();
            }

            return Ok(cutscenes);
        }
        [HttpGet("id/{id}")]
        public async Task<ActionResult<Cutscene>> GetCutsceneById(int id)
        {
            var cutscene = await _context.Cutscenes.FindAsync(id);
            if (cutscene == null)
            {
                return NotFound();
            }
            return Ok(cutscene);
        }
        [HttpGet("{type}/order/{order}")]
        public async Task<ActionResult<Cutscene>> GetCutsceneByTypeAndOrder(string type, int order)
        {
            var cutscene = await _context.Cutscenes
                .FirstOrDefaultAsync(m => m.Type == type && m.Order == order);
            if (cutscene == null)
            {
                return NotFound();
            }
            return Ok(cutscene);
        }

    }
}
