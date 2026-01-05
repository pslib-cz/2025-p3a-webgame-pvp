using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class Minihry2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[,]
                {
                    { "slots", "Player spins Slot machine and hopes for all three symbols to be same", 1, "Spiny spin :)", 100 },
                    { "whackamole", "Player is whacking moles.", 3, "Whack a Mole", 100 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "slots");

            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "whackamole");
        }
    }
}
