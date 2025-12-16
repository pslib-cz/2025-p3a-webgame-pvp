using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class AllInConsumables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "beer");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "eggnog");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "fruitsmoothie");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "gintonic");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "palinka");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "pepermintliqueur");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "slushy");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "soda");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "water");

            migrationBuilder.DeleteData(
                table: "Drinks",
                keyColumn: "DrinkId",
                keyValue: "wine");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "burger");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "cottoncandy");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "goulash");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "hotdog");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "langos");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "pizza");

            migrationBuilder.DeleteData(
                table: "Foods",
                keyColumn: "FoodId",
                keyValue: "salad");

            migrationBuilder.CreateTable(
                name: "Consumables",
                columns: table => new
                {
                    ConsumableId = table.Column<string>(type: "TEXT", nullable: false),
                    Type = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    HungerRestoreValue = table.Column<int>(type: "INTEGER", nullable: false),
                    ThirstRestoreValue = table.Column<int>(type: "INTEGER", nullable: false),
                    IsAlcoholic = table.Column<bool>(type: "INTEGER", nullable: false),
                    AlcoholContent = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consumables", x => x.ConsumableId);
                });

            migrationBuilder.InsertData(
                table: "Consumables",
                columns: new[] { "ConsumableId", "AlcoholContent", "Description", "HungerRestoreValue", "IsAlcoholic", "Name", "Price", "ThirstRestoreValue", "Type" },
                values: new object[,]
                {
                    { "beer", 5, "A cold glass of beer.", 0, true, "Beer", 6, 10, 1 },
                    { "burger", 0, "A delicious beef burger with lettuce, tomato, and cheese.", 20, false, "Burger", 10, 0, 0 },
                    { "cottoncandy", 0, "A fluffy and sweet treat made from spun sugar.", 8, false, "Cotton Candy", 4, 0, 0 },
                    { "eggnog", 20, "A rich and creamy holiday drink made with milk, cream, sugar, whipped egg whites, and egg yolks, often spiked with rum or bourbon.", 0, true, "Eggnog", 6, 9, 1 },
                    { "fruitsmoothie", 0, "A healthy and refreshing blend of fresh fruits.", 0, false, "Fruit Smoothie", 5, 8, 1 },
                    { "gintonic", 15, "A classic cocktail made with gin and tonic water, garnished with a slice of lime.", 0, true, "Gin Tonic", 9, 14, 1 },
                    { "goulash", 0, "A hearty Hungarian stew made with beef, vegetables, and paprika.", 25, false, "Goulash", 12, 0, 0 },
                    { "hotdog", 0, "A classic hot dog with mustard and ketchup.", 10, false, "Hot Dog", 5, 0, 0 },
                    { "langos", 0, "A traditional Hungarian deep-fried flatbread topped with garlic, sour cream, and cheese.", 12, false, "Lángos", 7, 0, 0 },
                    { "palinka", 40, "A traditional Hungarian fruit brandy, known for its strong flavor and high alcohol content.", 0, true, "Pálinka", 10, 15, 1 },
                    { "pepermintliqueur", 25, "A sweet and minty liqueur made from peppermint leaves, perfect for a refreshing after-dinner drink.", 0, true, "Peppermint Liqueur", 7, 10, 1 },
                    { "pizza", 0, "A large pepperoni pizza with extra cheese.", 30, false, "Pizza", 15, 0, 0 },
                    { "salad", 0, "A fresh garden salad with a variety of vegetables.", 15, false, "Salad", 8, 0, 0 },
                    { "slushy", 0, "A cold and refreshing slushy drink made with crushed ice and flavored syrup, perfect for hot days.", 0, false, "Slushy", 4, 6, 1 },
                    { "soda", 0, "A refreshing carbonated soft drink.", 0, false, "Soda", 3, 5, 1 },
                    { "water", 0, "A refreshing glass of water.", 0, false, "Water", 2, 3, 1 },
                    { "wine", 12, "A glass of fine wine.", 0, true, "Wine", 8, 12, 1 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consumables");

            migrationBuilder.InsertData(
                table: "Drinks",
                columns: new[] { "DrinkId", "AlcoholContent", "Description", "IsAlcoholic", "Name", "Price", "RestoreValue" },
                values: new object[,]
                {
                    { "beer", 5, "A cold glass of beer.", true, "Beer", 6, 10 },
                    { "eggnog", 20, "A rich and creamy holiday drink made with milk, cream, sugar, whipped egg whites, and egg yolks, often spiked with rum or bourbon.", true, "Eggnog", 6, 9 },
                    { "fruitsmoothie", 0, "A healthy and refreshing blend of fresh fruits.", false, "Fruit Smoothie", 5, 8 },
                    { "gintonic", 15, "A classic cocktail made with gin and tonic water, garnished with a slice of lime.", true, "Gin Tonic", 9, 14 },
                    { "palinka", 40, "A traditional Hungarian fruit brandy, known for its strong flavor and high alcohol content.", true, "Pálinka", 10, 15 },
                    { "pepermintliqueur", 25, "A sweet and minty liqueur made from peppermint leaves, perfect for a refreshing after-dinner drink.", true, "Peppermint Liqueur", 7, 10 },
                    { "slushy", 0, "A cold and refreshing slushy drink made with crushed ice and flavored syrup, perfect for hot days.", false, "Slushy", 4, 6 },
                    { "soda", 0, "A refreshing carbonated soft drink.", false, "Soda", 3, 5 },
                    { "water", 0, "A refreshing glass of water.", false, "Water", 2, 3 },
                    { "wine", 12, "A glass of fine wine.", true, "Wine", 8, 12 }
                });

            migrationBuilder.InsertData(
                table: "Foods",
                columns: new[] { "FoodId", "Description", "Name", "Price", "RestoreValue" },
                values: new object[,]
                {
                    { "burger", "A delicious beef burger with lettuce, tomato, and cheese.", "Burger", 10, 20 },
                    { "cottoncandy", "A fluffy and sweet treat made from spun sugar.", "Cotton Candy", 4, 8 },
                    { "goulash", "A hearty Hungarian stew made with beef, vegetables, and paprika.", "Goulash", 12, 25 },
                    { "hotdog", "A classic hot dog with mustard and ketchup.", "Hot Dog", 5, 10 },
                    { "langos", "A traditional Hungarian deep-fried flatbread topped with garlic, sour cream, and cheese.", "Lángos", 7, 12 },
                    { "pizza", "A large pepperoni pizza with extra cheese.", "Pizza", 15, 30 },
                    { "salad", "A fresh garden salad with a variety of vegetables.", "Salad", 8, 15 }
                });
        }
    }
}
