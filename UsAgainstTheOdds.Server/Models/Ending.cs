using System.ComponentModel.DataAnnotations;

namespace UsAgainstTheOdds.Server.Models
{
    public class Ending
    {
        [Key]
        public int EndingId { get; set; }
        public required string Reason { get; set; }
        public string? Person { get; set; }
        public required string Title { get; set; }
        public required string Message { get; set; }
        public required string BackgroundUrl { get; set; }
        public required string ImageUrl { get; set; }
    }
}
