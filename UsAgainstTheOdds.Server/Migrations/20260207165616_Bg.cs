using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class Bg : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Text",
                value: "I need that one bear! It's so cute! Please, let's go get it!");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Text",
                value: "It's expensive... And we don't have much tickets.");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 4,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 5,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 6,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 7,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 8,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 9,
                column: "BackgroundUrl",
                value: "/images/Endings/Background.png");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                column: "BackgroundUrl",
                value: "/images/Endings/BreakupBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 4,
                column: "BackgroundUrl",
                value: "/images/Endings/HungryBoyBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 5,
                column: "BackgroundUrl",
                value: "/images/Endings/HungryGirlBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 6,
                column: "BackgroundUrl",
                value: "/images/Endings/ThirstyBoyBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 7,
                column: "BackgroundUrl",
                value: "/images/Endings/ThirstyGirlBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 8,
                column: "BackgroundUrl",
                value: "/images/Endings/DrunkBoyBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 9,
                column: "BackgroundUrl",
                value: "/images/Endings/DrunkGirlBg.png");
        }
    }
}
