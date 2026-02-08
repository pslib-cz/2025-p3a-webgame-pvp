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

        // GET: api/jokes/random
        [HttpGet("random")]
        public async Task<ActionResult<Joke>> GetRandomJoke()
        {
            var count = await _context.Jokes.CountAsync();
            if (count == 0) return NotFound();

            var rnd = new Random();
            var index = rnd.Next(count);
            var joke = await _context.Jokes.Skip(index).FirstOrDefaultAsync();

            return Ok(joke);
        }

        // GET: api/jokes/5
        // Přidáno :int pro rozlišení od /random
        [HttpGet("{id:int}")] 
        public async Task<ActionResult<Joke>> GetJoke(int id)
        {
            var joke = await _context.Jokes.FirstOrDefaultAsync(m => m.JokeId == id);

            if (joke == null) return NotFound();

            return Ok(joke);
        }

        // GET: api/jokes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Joke>>> GetAllJokes()
        {
            var jokes = await _context.Jokes.ToListAsync();
            return Ok(jokes);
        }
    }
}