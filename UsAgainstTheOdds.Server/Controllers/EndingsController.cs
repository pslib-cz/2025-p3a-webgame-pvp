using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EndingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public EndingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        //https://localhost:7222/api/endings
        [HttpGet]
        public async Task<ActionResult<List<Ending>>> GetEndings()
        {
            var Endings = await _context.Endings.ToListAsync();
            return Ok(Endings);
        }

        //https://localhost:7222/api/endings/{reason}/all
        [HttpGet("{reason}/all")]
        public async Task<ActionResult<List<Ending>>> GetEndingByReasonAll(string reason)
        {
            var Endings = await _context.Endings
                .Where(m => m.Reason.ToLower() == reason.ToLower())
                .ToListAsync();

            if (Endings == null || Endings.Count == 0)
            {
                return NotFound();
            }
            return Ok(Endings);
        }

        //https://localhost:7222/api/endings/{reason}
        [HttpGet("{reason}")]
        public async Task<ActionResult<Ending>> GetEndingByReason(string reason)
        {
            var Ending = await _context.Endings
                .FirstOrDefaultAsync(m => m.Reason.ToLower() == reason.ToLower());
            if (Ending == null)
            {
                return NotFound();
            }
            return Ok(Ending);
        }

        //https://localhost:7222/api/endings/{reason}/{person}
        [HttpGet("{reason}/{person}")]
        public async Task<ActionResult<Ending>> GetEndingByReasonAndPerson(string reason, string person)
        {
            var Ending = await _context.Endings
                .FirstOrDefaultAsync(m => m.Reason.ToLower() == reason.ToLower() && m.Person.ToLower() == person.ToLower());
            if (Ending == null)
            {
                return NotFound();
            }
            return Ok(Ending);
        }

    }
}
