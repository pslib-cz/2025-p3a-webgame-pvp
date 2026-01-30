using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class cutscenes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IntroScreens");

            migrationBuilder.CreateTable(
                name: "Cutscenes",
                columns: table => new
                {
                    CutsceneId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Type = table.Column<string>(type: "TEXT", nullable: false),
                    Text = table.Column<string>(type: "TEXT", nullable: false),
                    Speaker = table.Column<int>(type: "INTEGER", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    ButtonText = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cutscenes", x => x.CutsceneId);
                });

            migrationBuilder.InsertData(
                table: "Cutscenes",
                columns: new[] { "CutsceneId", "ButtonText", "ImageUrl", "Speaker", "Text", "Type" },
                values: new object[,]
                {
                    { 1, "Continue", "/images/Cutscene/Intro/Intro1.png", 1, "We’ve got nothing left but a few last coins and this city, ready to swallow us whole.", "Intro" },
                    { 2, "Continue", "/images/Cutscene/Intro/Intro2.png", 2, "But we can’t give up now. We have to take a chance, no matter the odds.", "Intro" },
                    { 3, "Continue", "/images/Cutscene/Intro/Intro3.png", 1, "This casino is our only shot—either we win big today, or we lose the little we have left.", "Intro" },
                    { 4, "Let's go!", "/images/Cutscene/Intro/Intro4.png", 2, "Take a breath, we're going in... today, it's the two of us against the odds.", "Intro" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cutscenes");

            migrationBuilder.CreateTable(
                name: "IntroScreens",
                columns: table => new
                {
                    IntroScreenId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ButtonText = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    Speaker = table.Column<int>(type: "INTEGER", nullable: false),
                    Text = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IntroScreens", x => x.IntroScreenId);
                });

            migrationBuilder.InsertData(
                table: "IntroScreens",
                columns: new[] { "IntroScreenId", "ButtonText", "ImageUrl", "Speaker", "Text" },
                values: new object[,]
                {
                    { 1, "Continue", "/images/Cutscene/intro1.png", 1, "We’ve got nothing left but a few last coins and this city, ready to swallow us whole." },
                    { 2, "Continue", "/images/Cutscene/intro2.png", 2, "But we can’t give up now. We have to take a chance, no matter the odds." },
                    { 3, "Continue", "/images/Cutscene/intro3.png", 1, "This casino is our only shot—either we win big today, or we lose the little we have left." },
                    { 4, "Let's go!", "/images/Cutscene/intro4.png", 2, "Take a breath, we're going in... today, it's the two of us against the odds." }
                });
        }
    }
}
