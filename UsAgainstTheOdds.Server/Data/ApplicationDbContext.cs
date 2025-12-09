using Microsoft.EntityFrameworkCore;
using System.Drawing;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        private readonly ApplicationDbContext _context;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }
        public DbSet<Minigame> Minigames { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=UsAgainstTheOdds.sqlite");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Minigame>(ent =>
            {
                ent.HasData(
                    new Minigame
                    {
                        MinigameId = "test",
                        Name = "Test minigame",
                        Description = "This is a test minigame",
                        Price = 100,
                        StaminaCost = 10
                    },
                    new Minigame
                    {
                        MinigameId = "russianrullete",
                        Name = "Risky Turn",
                        Description = "Napínavá hra náhody, kde hráči riskují vše pro odměnu a zkoušejí své štěstí a odvahu. Inspirované ruskou ruletou.",
                        Price = 500,
                        StaminaCost = 20
                    },
                    new Minigame
                    {
                        MinigameId = "balckjack",
                        Name = "Lucky 21",
                        Description = "Rychlá karetní hra, kde hráč usiluje o hodnotu co nejblíže 21. Pravidla podle známého Black Jacku.",
                        Price = 300,
                        StaminaCost = 15
                    },
                    new Minigame
                    {
                        MinigameId = "cupsandcoins",
                        Name = "Cups & Coins",
                        Description = "Hráči hádají pod kerou nádobkou se nachází skrytý objekt, založeno na štěstí a intuici.Na styl skořápek.",
                        Price = 200,
                        StaminaCost = 10
                    }

                    );
            });
        }

    }
}
