using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IntroScenesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public IntroScenesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<IntroScreen>>> GetIntroScenes()
        {
            var introscreens = await _context.IntroScreens.ToListAsync();
            return Ok(introscreens);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IntroScreen>> GetIntroScene(int id)
        {
            var introscreen = await _context.IntroScreens
                .FirstOrDefaultAsync(m => m.IntroScreenId == id);

            if (introscreen == null)
            {
                return NotFound();
            }

            return Ok(introscreen);
        }

    }
}
