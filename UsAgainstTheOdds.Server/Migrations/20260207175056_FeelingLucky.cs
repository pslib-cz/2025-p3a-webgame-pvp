using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class FeelingLucky : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "cupsandcoins");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "feelinglucky", "Players guess under which cup the hidden object is located, based on luck and intuition. Based on the shell game.", 1, "Feeling Lucky", 200 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "feelinglucky");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "cupsandcoins", "Players guess under which cup the hidden object is located, based on luck and intuition. Based on the shell game.", 1, "Cups & Coins", 200 });
        }
    }
}
