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

        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Cutscene>>> GetCutscenes()
        //{
        //    var cutscenes = await _context.Cutscenes.ToListAsync();
        //    return Ok(cutscene);
        //}

        //[HttpGet("{id}")]
        //public async Task<ActionResult<Cutscene>> GetCutsceneByType(int id)
        //{
        //    var cutscene = await _context.Cutscenes
        //        .FirstOrDefaultAsync(m => m.CutsceneId == id);

        //    if (cutscene == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(cutscene);
        //}

    }
}
