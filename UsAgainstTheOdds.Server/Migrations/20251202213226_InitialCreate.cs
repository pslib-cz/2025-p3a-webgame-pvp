using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Minigames",
                columns: table => new
                {
                    MinigameId = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Minigames", x => x.MinigameId);
                });

            migrationBuilder.InsertData(
                table: "Minigames",
                columns: new[] { "MinigameId", "Description", "Name", "Price" },
                values: new object[,]
                {
                    { "balckjack", "Rychlá karetní hra, kde hráč usiluje o hodnotu co nejblíže 21. Pravidla podle známého Black Jacku.", "Lucky 21", 300 },
                    { "cupsandcoins", "Hráči hádají pod kerou nádobkou se nachází skrytý objekt, založeno na štěstí a intuici.Na styl skořápek.", "Cups & Coins", 200 },
                    { "russianrullete", "Napínavá hra náhody, kde hráči riskují vše pro odměnu a zkoušejí své štěstí a odvahu. Inspirované ruskou ruletou.", "Risky Turn", 500 },
                    { "test", "This is a test minigame", "Test minigame", 100 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Minigames");
        }
    }
}
