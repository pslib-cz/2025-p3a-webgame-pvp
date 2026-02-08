using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddBackgroundUrlToEndings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BackgroundUrl",
                table: "Endings",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 1,
                columns: new[] { "BackgroundUrl", "Message" },
                values: new object[] { "/images/Endings/VictoryBg.png", "You fulfilled your girlfriend's dream and won enough money to start a new life together!" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                column: "BackgroundUrl",
                value: "/images/Endings/BreakupBg.png");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 3,
                column: "BackgroundUrl",
                value: "/images/Endings/BankruptBg.png");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BackgroundUrl",
                table: "Endings");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 1,
                column: "Message",
                value: "You fullfilled your girlfriend's dream and won enough money to start a new life together!");
        }
    }
}
