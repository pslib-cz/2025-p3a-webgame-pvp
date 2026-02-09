using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class ChangePrices : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "beer",
                column: "Price",
                value: 30);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "cottoncandy",
                column: "Price",
                value: 40);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "eggnog",
                column: "Price",
                value: 30);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "fruitsmoothie",
                column: "Price",
                value: 25);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "gintonic",
                column: "Price",
                value: 45);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "goulash",
                column: "Price",
                value: 120);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "hotdog",
                column: "Price",
                value: 40);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "langos",
                column: "Price",
                value: 70);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "palinka",
                column: "Price",
                value: 50);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pepermintliqueur",
                column: "Price",
                value: 35);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pizza",
                column: "Price",
                value: 180);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "salad",
                column: "Price",
                value: 65);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "slushy",
                column: "Price",
                value: 20);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "soda",
                column: "Price",
                value: 30);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "water",
                column: "Price",
                value: 20);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "wine",
                column: "Price",
                value: 40);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "beer",
                column: "Price",
                value: 6);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "cottoncandy",
                column: "Price",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "eggnog",
                column: "Price",
                value: 6);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "fruitsmoothie",
                column: "Price",
                value: 5);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "gintonic",
                column: "Price",
                value: 9);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "goulash",
                column: "Price",
                value: 12);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "hotdog",
                column: "Price",
                value: 5);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "langos",
                column: "Price",
                value: 7);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "palinka",
                column: "Price",
                value: 10);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pepermintliqueur",
                column: "Price",
                value: 7);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pizza",
                column: "Price",
                value: 15);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "salad",
                column: "Price",
                value: 8);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "slushy",
                column: "Price",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "soda",
                column: "Price",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "water",
                column: "Price",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "wine",
                column: "Price",
                value: 8);
        }
    }
}
