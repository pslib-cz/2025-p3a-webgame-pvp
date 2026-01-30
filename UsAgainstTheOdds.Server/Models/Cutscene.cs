using System.ComponentModel.DataAnnotations;
using static UsAgainstTheOdds.Server.Models.Enums;

namespace UsAgainstTheOdds.Server.Models
{
    public class Cutscene
    {
        [Key]
        public int CutsceneId { get; set; }
        public required string Type { get; set; }
        public required int Order { get; set; }
        public string? Text { get; set; }
        public SpeakerType? Speaker { get; set; }
        public required string ImageUrl { get; set; }
        public required string ButtonText { get; set; }
    }
}
