using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JokeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JokeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/joke
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Joke>>> GetAllJokes()
        {
            return await _context.Jokes.ToListAsync();
        }

        // GET: api/joke/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Joke>> GetJoke(int id)
        {
            var joke = await _context.Jokes.FindAsync(id);

            if (joke == null)
            {
                return NotFound();
            }

            return joke;
        }
    }
}