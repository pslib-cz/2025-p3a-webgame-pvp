using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Minigame
    {
        [Key]
        public string MinigameId { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required int Price { get; set; }
        public required int StaminaCost { get; set; }
    }
}
