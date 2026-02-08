using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class fixxxxx : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Consumables",
                columns: new[] { "ConsumableId", "AlcoholContent", "Description", "HungerRestoreValue", "IsAlcoholic", "Name", "Price", "ThirstRestoreValue", "Type" },
                values: new object[] { "hotdog", 0, "A classic hot dog with ketchup and mustard.", 10, false, "Hot Dog", 5, 0, 0 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "hotdog");
        }
    }
}
