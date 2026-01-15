using System.ComponentModel.DataAnnotations;
using static UsAgainstTheOdds.Server.Models.Enums;

namespace UsAgainstTheOdds.Server.Models
{
    public class IntroScreen
    {
        [Key]
        public int IntroScreenId { get; set; }
        public string Text { get; set; }
        public SpeakerType Speaker { get; set; }
        public required string ImageUrl { get; set; }
        public required string ButtonText { get; set; }
    }
}
