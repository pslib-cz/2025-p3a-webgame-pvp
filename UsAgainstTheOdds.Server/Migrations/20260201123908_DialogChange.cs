using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsAgainstTheOdds.Server.Migrations
{
    /// <inheritdoc />
    public partial class DialogChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                column: "Text",
                value: "I hope we enjoy it here...");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Text",
                value: "I need taht bear! It's so cute! Please, let's go get it!");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Text",
                value: "It's expensive... We don't have any tickets");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 4,
                column: "Text",
                value: "Please, I really want it! You can win some tickets in the games!");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 1,
                column: "Text",
                value: "We’ve got nothing left but a few last coins and this city, ready to swallow us whole.");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 2,
                column: "Text",
                value: "But we can’t give up now. We have to take a chance, no matter the odds.");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 3,
                column: "Text",
                value: "This casino is our only shot—either we win big today, or we lose the little we have left.");

            migrationBuilder.UpdateData(
                table: "Cutscenes",
                keyColumn: "CutsceneId",
                keyValue: 4,
                column: "Text",
                value: "Take a breath, we're going in... today, it's the two of us against the odds.");
        }
    }
}
