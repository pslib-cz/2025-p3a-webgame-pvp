using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Items
    {
        [Key]
        public string ItemId { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required int Price { get; set; }
        public required string staminaRestoreValue { get; set; }

    }

}
