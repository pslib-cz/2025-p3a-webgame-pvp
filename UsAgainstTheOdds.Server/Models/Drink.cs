using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Drink
    {
        [Key]
        public string DrinkId { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required int Price { get; set; }
        public required int RestoreValue { get; set; }
        public required bool IsAlcoholic { get; set; }
        public int AlcoholContent { get; set; }
    }
}
