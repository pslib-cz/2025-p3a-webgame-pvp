using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Consumable
    {
        [Key]
        public string ConsumableId { get; set; }
        public required Enums.ConsumableType Type { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required int Price { get; set; }
        public required int HungerRestoreValue { get; set; }
        public required int ThirstRestoreValue { get; set; }
        public required bool IsAlcoholic { get; set; }
        public int AlcoholContent { get; set; }

        
    }
    
}
