using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddEnding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Endings",
                columns: table => new
                {
                    EndingId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Reason = table.Column<string>(type: "TEXT", nullable: false),
                    Person = table.Column<string>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Message = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Endings", x => x.EndingId);
                });

            migrationBuilder.InsertData(
                table: "Endings",
                columns: new[] { "EndingId", "ImageUrl", "Message", "Person", "Reason", "Title" },
                values: new object[,]
                {
                    { 1, "/images/Endings/Victory.png", "You fullfilled your girlfriend's dream and won enough money to start a new life together!", "Both", "Victory", "You Win!" },
                    { 2, "/images/Endings/Breakup.png", "Your girlfriend broke up with you, because you didn't pay attention to her.", "Girl", "Breakup", "You Broke Up" },
                    { 3, "/images/Endings/Bankrupt.png", "You lost all your money at the casino. Your girlfriend is disappointed.", "Boy", "Bankrupt", "You Went Bankrupt" },
                    { 4, "/images/Endings/HungryBoy.png", "You didn't eat anything and collapsed from hunger. Your girlfriend is disappointed.", "Boy", "Hungry", "You Went Hungry" },
                    { 5, "/images/Endings/HungryGirl.png", "She didn't eat anything and collapsed from hunger.", "Girl", "Hungry", "Your Girlfriend Went Hungry" },
                    { 6, "/images/Endings/ThirstyBoy.png", "You didn't drink anything and collapsed from thirst.", "Boy", "Thirsty", "You Got Thirsty" },
                    { 7, "/images/Endings/ThirstyGirl.png", "She didn't drink anything and collapsed from thirst.", "Girl", "Thirsty", "Your Girlfriend Got Thirsty" },
                    { 8, "/images/Endings/DrunkBoy.png", "You drank too much alcohol and passed out. Your girlfriend is disappointed.", "Boy", "Drunk", "You Got Drunk" },
                    { 9, "/images/Endings/DrunkGirl.png", "She drank too much alcohol and passed out.", "Girl", "Drunk", "Your Girlfriend Got Drunk" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Endings");
        }
    }
}
