using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JokesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JokesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/joke
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Joke>>> GetAllJokes()
        {
            var Jokes = await _context.Jokes.ToListAsync();
            return Ok(Jokes);
        }

        // GET: api/joke/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Joke>> GetJoke(int id)
        {
            var Joke = await _context.Jokes.FirstOrDefaultAsync(m => m.JokeId == id);

            if (Joke == null)
            {
                return NotFound();
            }

            return Ok(Joke);
        }
    }
}