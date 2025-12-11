using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class idChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "balckjack");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "blackjack", "Fast-paced card game where players aim for a hand value as close to 21 as possible. Rules based on the well-known Black Jack.", 1, "Lucky 21", 300 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "blackjack");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "balckjack", "Fast-paced card game where players aim for a hand value as close to 21 as possible. Rules based on the well-known Black Jack.", 1, "Lucky 21", 300 });
        }
    }
}
