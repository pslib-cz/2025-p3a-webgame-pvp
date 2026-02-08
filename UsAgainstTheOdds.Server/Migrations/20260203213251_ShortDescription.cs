using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class ShortDescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "beer",
                column: "Description",
                value: "0.5l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "burger",
                column: "Description",
                value: "Juicy beef, melted cheese, salad, brioche bun.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "cottoncandy",
                column: "Description",
                value: "Fluffy spun sugar on a stick.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "eggnog",
                column: "Description",
                value: "0.04l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "fruitsmoothie",
                column: "Description",
                value: "0.5l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "gintonic",
                column: "Description",
                value: "0.04l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "goulash",
                column: "Description",
                value: "Hearty beef stew with paprika spices.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "hotdog",
                column: "Description",
                value: "Grilled sausage in a toasted bun.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "langos",
                column: "Description",
                value: "Traditional fried dough with garlic butter.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "palinka",
                column: "Description",
                value: "0.04l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pepermintliqueur",
                column: "Description",
                value: "0.04l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pizza",
                column: "Description",
                value: "Pepperoni pizza with rich tomato base.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "salad",
                column: "Description",
                value: "Fresh seasonal greens with light dressing.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "slushy",
                column: "Description",
                value: "0.5l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "soda",
                column: "Description",
                value: "0.5l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "water",
                column: "Description",
                value: "0.3l");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "wine",
                column: "Description",
                value: "0.75l");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "beer",
                column: "Description",
                value: "A cold glass of beer.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "burger",
                column: "Description",
                value: "A delicious beef burger with lettuce, tomato, and cheese.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "cottoncandy",
                column: "Description",
                value: "A fluffy and sweet treat made from spun sugar.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "eggnog",
                column: "Description",
                value: "A rich and creamy holiday drink made with milk, cream, sugar, whipped egg whites, and egg yolks, often spiked with rum or bourbon.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "fruitsmoothie",
                column: "Description",
                value: "A healthy and refreshing blend of fresh fruits.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "gintonic",
                column: "Description",
                value: "A classic cocktail made with gin and tonic water, garnished with a slice of lime.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "goulash",
                column: "Description",
                value: "A hearty Hungarian stew made with beef, vegetables, and paprika.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "hotdog",
                column: "Description",
                value: "A classic hot dog with mustard and ketchup.");

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

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pepermintliqueur",
                column: "Description",
                value: "A sweet and minty liqueur made from peppermint leaves, perfect for a refreshing after-dinner drink.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "pizza",
                column: "Description",
                value: "A large pepperoni pizza with extra cheese.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "salad",
                column: "Description",
                value: "A fresh garden salad with a variety of vegetables.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "slushy",
                column: "Description",
                value: "A cold and refreshing slushy drink made with crushed ice and flavored syrup, perfect for hot days.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "soda",
                column: "Description",
                value: "A refreshing carbonated soft drink.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "water",
                column: "Description",
                value: "A refreshing glass of water.");

            migrationBuilder.UpdateData(
                table: "Consumables",
                keyColumn: "ConsumableId",
                keyValue: "wine",
                column: "Description",
                value: "A glass of fine wine.");
        }
    }
}
