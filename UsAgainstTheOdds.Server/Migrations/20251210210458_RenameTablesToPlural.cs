using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class RenameTablesToPlural : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Tady říkáme: Přejmenuj existující tabulku "Food" na novou "Foods"
            migrationBuilder.RenameTable(
                name: "Food",
                newName: "Foods");

            // A to samé pro Drink -> Drinks
            migrationBuilder.RenameTable(
                name: "Drink",
                newName: "Drinks");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Metoda Down slouží k vrácení změn (kdybys migraci rušil)
            // Takže dělá přesný opak: Foods -> Food
            migrationBuilder.RenameTable(
                name: "Foods",
                newName: "Food");

            migrationBuilder.RenameTable(
                name: "Drinks",
                newName: "Drink");
        }
    }
}