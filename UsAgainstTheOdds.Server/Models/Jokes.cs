using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Ending
    {
        [Key]
        public int JokeId { get; set; }
        public required string Joke{ get; set; }
        public required string Punchline { get; set; }
        public bool IsFunny { get; set; }
    }
}
