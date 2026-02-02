using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class Jokes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Jokes",
                columns: table => new
                {
                    JokeId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    JokeText = table.Column<string>(type: "TEXT", nullable: false),
                    Punchline = table.Column<string>(type: "TEXT", nullable: false),
                    IsFunny = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jokes", x => x.JokeId);
                });

            migrationBuilder.InsertData(
                table: "Jokes",
                columns: new[] { "JokeId", "IsFunny", "JokeText", "Punchline" },
                values: new object[,]
                {
                    { 1, false, "A Lego figure is like a bee;", "When you step on it, it hurts!" },
                    { 2, true, "They could start putting different toys in those avocados;", "I've already got a drawer full of those wooden beads." },
                    { 3, false, "Do you know the difference between a horse and chopping onions?", "None, you cry while doing it, but it just belongs in the goulash." },
                    { 4, true, "Do you know what is black and white and will kill you if it falls on you from a tree?", "A piano." },
                    { 5, true, "Do you know what an owl is called when you leave it in the oven for a long time?", "A burnt owl." },
                    { 6, true, "Do you know what you get if you combine a hedgehog and a giraffe?", "A four-meter toothbrush!" },
                    { 7, true, "Do you know how German pastry greets?", "Gluten tag" },
                    { 8, false, "Why do they call your brother digital watch?", "He has no arms?" },
                    { 9, false, "Do you know why God created Eve?", "To have someone to sing with Vašek!!" },
                    { 10, false, "Do you know why the Grim Reaper has a scythe?", "Because he can't afford a combine harvester." }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jokes");
        }
    }
}
