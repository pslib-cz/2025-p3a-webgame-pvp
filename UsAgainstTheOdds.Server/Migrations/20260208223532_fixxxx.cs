using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class fixxxx : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "burger");

            migrationBuilder.DeleteData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "hotdog");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "eggnog",
                column: "Description",
                value: "A rich and creamy holiday drink, often spiked with rum or bourbon.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "langos",
                column: "Description",
                value: "A traditional deep-fried flatbread topped with garlic, sour cream, and cheese.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "palinka",
                column: "Description",
                value: "A fruit brandy, known for its flavor and high alcohol content.");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "eggnog",
                column: "Description",
                value: "A rich and creamy holiday drink made with milk, cream, sugar, whipped egg whites, and egg yolks, often spiked with rum or bourbon.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "langos",
                column: "Description",
                value: "A traditional Hungarian deep-fried flatbread topped with garlic, sour cream, and cheese.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "palinka",
                column: "Description",
                value: "A traditional Hungarian fruit brandy, known for its strong flavor and high alcohol content.");

            migrationBuilder.InsertData(
                table: "Consumables",
                columns: new[] { "ConsumableId", "AlcoholContent", "Description", "HungerRestoreValue", "IsAlcoholic", "Name", "Price", "ThirstRestoreValue", "Type" },
                values: new object[,]
                {
                    { "burger", 0, "A delicious beef burger with lettuce, tomato, and cheese.", 20, false, "Burger", 10, 0, 0 },
                    { "hotdog", 0, "A classic hot dog with mustard and ketchup.", 10, false, "Hot Dog", 5, 0, 0 }
                });
        }
    }
}
