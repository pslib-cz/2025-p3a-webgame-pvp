using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class Roulette : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "russianrulette");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "russianroulette", "Thrilling game of chance where players risk it all for reward, testing their luck and courage. Inspired by Russian roulette.", 1, "Risky Turn", 500 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "russianroulette");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "russianrulette", "Thrilling game of chance where players risk it all for reward, testing their luck and courage. Inspired by Russian roulette.", 1, "Risky Turn", 500 });
        }
    }
}
