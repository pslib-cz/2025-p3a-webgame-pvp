using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Item
    {
        [Key]
        public string ItemId { get; set; }
        public required string Name { get; set; }
        public required int Price { get; set; }
        public required int RelationRestoreValue { get; set; }
    }
}
