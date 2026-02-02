using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Joke
    {
        [Key]
        public int JokeId { get; set; }
        public required string JokeText{ get; set; }
        public required string Punchline { get; set; }
        public bool IsFunny { get; set; }
    }
}
