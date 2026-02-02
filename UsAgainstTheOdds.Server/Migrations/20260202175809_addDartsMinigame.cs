using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class addDartsMinigame : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                column: "Text",
                value: "I hope you enjoy it here...");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Text",
                value: "I need that bear! It's so cute! Please, let's go get it!");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Text",
                value: "It's expensive... And we don't have any tickets.");

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Difficulty", "Name", "Price" },
                values: new object[] { "darts", "Player is trying to hit as close to the bullseye as possible.", 2, "Darts", 100 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "darts");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                column: "Text",
                value: "I hope we enjoy it here...");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Text",
                value: "I need taht bear! It's so cute! Please, let's go get it!");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Text",
                value: "It's expensive... We don't have any tickets");
        }
    }
}
