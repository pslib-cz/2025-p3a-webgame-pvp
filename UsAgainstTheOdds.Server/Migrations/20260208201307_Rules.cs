using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class Rules : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Rules",
                table: "Minigames",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "blackjack",
                column: "Rules",
                value: "Your goal is to reach 21. Go over even by one, and you lose everything. Stand or hit another, the choice is yours. But remember, the Dealer plays to win, and he won't show you any mercy.");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "darts",
                column: "Rules",
                value: "Get to the center as close as possible. It wont be easy, hold steady and take your time.");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "feelinglucky",
                column: "Rules",
                value: "Test your intuition in this simple game of luck! The ball is hiding under one of thee cups, which one is it? You choose.");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "memorymatch",
                column: "Rules",
                value: "In this game you take turns with your opponent. Start by choosing two cards and remember them. Try to match as many pairs as you can!");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "russianroulette",
                column: "Rules",
                value: "There’s a prize on the shelf, but your cylinder is mostly empty. Load one bullet, give it a spin, and pray you aren't firing a blank. One shot. One chance.");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "slots",
                column: "Rules",
                value: "Pull the lever, wait for your moment, and hit Stop. Line up the symbols to win. Will you strike gold, or is your luck running dry?");

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "test",
                column: "Rules",
                value: null);

            migrationBuilder.UpdateData(
                table: "Minigames",
                keyColumn: "MinigameId",
                keyValue: "whackamole",
                column: "Rules",
                value: "No time to be slow. Try to whack as many moles as you see! Show no mercy.");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rules",
                table: "Minigames");
        }
    }
}
