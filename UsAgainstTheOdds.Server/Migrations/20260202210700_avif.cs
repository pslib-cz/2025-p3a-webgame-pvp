using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class avif : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                columns: new[] { "ImageUrl", "Text" },
                values: new object[] { "/images/Cutscene/Intro/Intro1.avif", "I hope you enjoy it here..." });

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                columns: new[] { "ImageUrl", "Text" },
                values: new object[] { "/images/Cutscene/Intro/Intro2.avif", "I need that bear! It's so cute! Please, let's go get it!" });

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                columns: new[] { "ImageUrl", "Text" },
                values: new object[] { "/images/Cutscene/Intro/Intro3.avif", "It's expensive... And we don't have any tickets." });

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/Cutscene/Intro/Intro4.avif");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                columns: new[] { "ImageUrl", "Text" },
                values: new object[] { "/images/Cutscene/Intro/Intro1.png", "I hope we enjoy it here..." });

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                columns: new[] { "ImageUrl", "Text" },
                values: new object[] { "/images/Cutscene/Intro/Intro2.png", "I need taht bear! It's so cute! Please, let's go get it!" });

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                columns: new[] { "ImageUrl", "Text" },
                values: new object[] { "/images/Cutscene/Intro/Intro3.png", "It's expensive... We don't have any tickets" });

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/Cutscene/Intro/Intro4.png");
        }
    }
}
