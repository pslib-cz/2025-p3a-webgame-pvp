using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class fix2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 1,
                column: "Person",
                value: null);

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                column: "Person",
                value: null);

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 3,
                column: "Person",
                value: null);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 1,
                column: "Person",
                value: "boy");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                column: "Person",
                value: "boy");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 3,
                column: "Person",
                value: "boy");
        }
    }
}
