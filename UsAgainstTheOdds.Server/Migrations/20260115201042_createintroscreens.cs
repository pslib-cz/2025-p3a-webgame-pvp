using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class createintroscreens : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Drinks");

            migrationBuilder.DropTable(
                name: "Foods");

            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "blackbear");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Items",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "IntroScreens",
                columns: table => new
                {
                    IntroScreenId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Text = table.Column<string>(type: "TEXT", nullable: false),
                    Speaker = table.Column<int>(type: "INTEGER", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    ButtonText = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IntroScreens", x => x.IntroScreenId);
                });

            migrationBuilder.InsertData(
                table: "IntroScreens",
                columns: new[] { "IntroScreenId", "ButtonText", "ImageUrl", "Speaker", "Text" },
                values: new object[,]
                {
                    { 1, "Continue", "images/Cutscenes/intro1.png", 1, "We’ve got nothing left but a few last coins and this city, ready to swallow us whole." },
                    { 2, "Continue", "images/Cutscenes/intro2.png", 2, "But we can’t give up now. We have to take a chance, no matter the odds." },
                    { 3, "Continue", "images/Cutscenes/intro3.png", 1, "This casino is our only shot—either we win big today, or we lose the little we have left." },
                    { 4, "Let's go!", "images/Cutscenes/intro4.png", 2, "Take a breath, we're going in... today, it's the two of us against the odds." }
                });

            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "gingerbreadheart",
                column: "Description",
                value: "A sweet gingerbread heart cookie.");

            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "pinkbear",
                column: "Description",
                value: "A cuddly pink bear plush toy.");

            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "rose",
                column: "Description",
                value: "A romantic red rose.");

            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "sunflower",
                column: "Description",
                value: "A bright sunflower.");

            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "tulip",
                column: "Description",
                value: "A beautiful tulip flower.");

            migrationBuilder.UpdateData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "whitebear",
                column: "Description",
                value: "A cuddly white bear plush toy.");

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "ItemId", "Description", "Name", "Price", "RelationRestoreValue" },
                values: new object[] { "brownbear", "A cuddly brown bear plush toy.", "Brown Bear", 10000, 20 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "slots",
                column: "Name",
                value: "Spiny spin");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IntroScreens");

            migrationBuilder.DeleteData(
                table: "Items",
                keyColumn: "ItemId",
                keyValue: "brownbear");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Items");

            migrationBuilder.CreateTable(
                name: "Drinks",
                columns: table => new
                {
                    DrinkId = table.Column<string>(type: "TEXT", nullable: false),
                    AlcoholContent = table.Column<int>(type: "INTEGER", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    IsAlcoholic = table.Column<bool>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    RestoreValue = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drinks", x => x.DrinkId);
                });

            migrationBuilder.CreateTable(
                name: "Foods",
                columns: table => new
                {
                    FoodId = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    RestoreValue = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Foods", x => x.FoodId);
                });

            migrationBuilder.InsertData(
                table: "Items",
                columns: new[] { "ItemId", "Name", "Price", "RelationRestoreValue" },
                values: new object[] { "blackbear", "Black Bear", 10000, 20 });

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "slots",
                column: "Name",
                value: "Spiny spin :)");
        }
    }
}
