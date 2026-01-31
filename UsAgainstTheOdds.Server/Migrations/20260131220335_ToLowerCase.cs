using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class ToLowerCase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                column: "Type",
                value: "intro");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Type",
                value: "intro");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Type",
                value: "intro");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 4,
                column: "Type",
                value: "intro");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                column: "Type",
                value: "Intro");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Type",
                value: "Intro");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Type",
                value: "Intro");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 4,
                column: "Type",
                value: "Intro");
        }
    }
}
