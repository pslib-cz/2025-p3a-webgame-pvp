using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class loenoss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 1,
                column: "ImageUrl",
                value: "/images/Cutscene/Intro1.png");

            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 2,
                column: "ImageUrl",
                value: "/images/Cutscene/Intro2.png");

            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 3,
                column: "ImageUrl",
                value: "/images/Cutscene/Intro3.png");

            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/Cutscene/Intro4.png");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 1,
                column: "ImageUrl",
                value: "/images/Cutscenes/intro1.png");

            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 2,
                column: "ImageUrl",
                value: "/images/Cutscenes/intro2.png");

            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 3,
                column: "ImageUrl",
                value: "/images/Cutscenes/intro3.png");

            migrationBuilder.UpdateData(
                table: "IntroScreens",
                keyColumn: "IntroScreenId",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/Cutscenes/intro4.png");
        }
    }
}
