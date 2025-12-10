using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class drinkfoodadd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StaminaCost",
                table: "Minigames",
                newName: "Difficulty");

            migrationBuilder.CreateTable(
                name: "Drink",
                columns: table => new
                {
                    DrinkId = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    RestoreValue = table.Column<int>(type: "INTEGER", nullable: false),
                    IsAlcoholic = table.Column<bool>(type: "INTEGER", nullable: false),
                    AlcoholContent = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drink", x => x.DrinkId);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    FoodId = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    RestoreValue = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.FoodId);
                });

            migrationBuilder.InsertData(
                table: "Drink",
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
                table: "Food",
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

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "balckjack",
                columns: new[] { "Description", "Difficulty" },
                values: new object[] { "Fast-paced card game where players aim for a hand value as close to 21 as possible. Rules based on the well-known Black Jack.", 1 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "cupsandcoins",
                columns: new[] { "Description", "Difficulty" },
                values: new object[] { "Players guess under which cup the hidden object is located, based on luck and intuition. Based on the shell game.", 1 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "russianrullete",
                columns: new[] { "Description", "Difficulty" },
                values: new object[] { "Thrilling game of chance where players risk it all for reward, testing their luck and courage. Inspired by Russian roulette.", 1 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "test",
                column: "Difficulty",
                value: 2);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Drink");

            migrationBuilder.DropTable(
                name: "Food");

            migrationBuilder.RenameColumn(
                name: "Difficulty",
                table: "Minigames",
                newName: "StaminaCost");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "balckjack",
                columns: new[] { "Description", "StaminaCost" },
                values: new object[] { "Rychlá karetní hra, kde hráč usiluje o hodnotu co nejblíže 21. Pravidla podle známého Black Jacku.", 15 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "cupsandcoins",
                columns: new[] { "Description", "StaminaCost" },
                values: new object[] { "Hráči hádají pod kerou nádobkou se nachází skrytý objekt, založeno na štěstí a intuici.Na styl skořápek.", 10 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "russianrullete",
                columns: new[] { "Description", "StaminaCost" },
                values: new object[] { "Napínavá hra náhody, kde hráči riskují vše pro odměnu a zkoušejí své štěstí a odvahu. Inspirované ruskou ruletou.", 20 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "test",
                column: "StaminaCost",
                value: 10);
        }
    }
}
