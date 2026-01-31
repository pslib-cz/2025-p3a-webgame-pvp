using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class EditEnding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Person",
                table: "Endings",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 1,
                columns: new[] { "Person", "Reason" },
                values: new object[] { null, "victory" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                columns: new[] { "Person", "Reason" },
                values: new object[] { null, "breakup" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 3,
                columns: new[] { "Person", "Reason" },
                values: new object[] { null, "bankrupt" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 4,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "boy", "hungry" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 5,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "girl", "hungry" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 6,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "boy", "thirsty" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 7,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "girl", "thirsty" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 8,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "boy", "drunk" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 9,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "girl", "drunk" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Person",
                table: "Endings",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 1,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Both", "Victory" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 2,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Girl", "Breakup" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 3,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Boy", "Bankrupt" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 4,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Boy", "Hungry" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 5,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Girl", "Hungry" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 6,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Boy", "Thirsty" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 7,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Girl", "Thirsty" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 8,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Boy", "Drunk" });

            migrationBuilder.UpdateData(
                table: "Endings",
                keyColumn: "EndingId",
                keyValue: 9,
                columns: new[] { "Person", "Reason" },
                values: new object[] { "Girl", "Drunk" });
        }
    }
}
