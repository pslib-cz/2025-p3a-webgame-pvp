using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class addStaminaToMinigames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StaminaCost",
                table: "Minigames",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "balckjack",
                column: "StaminaCost",
                value: 15);

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "cupsandcoins",
                column: "StaminaCost",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "russianrullete",
                column: "StaminaCost",
                value: 20);

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "test",
                column: "StaminaCost",
                value: 10);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StaminaCost",
                table: "Minigames");
        }
    }
}
