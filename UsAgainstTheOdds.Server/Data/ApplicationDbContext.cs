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
        public DbSet<Food> Foods { get; set; }
        public DbSet<Drink> Drinks { get; set; }
        public DbSet<Consumable> Consumables { get; set; }

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
                        Difficulty = 2
                    },
                    new Minigame
                    {
                        MinigameId = "russianroulette",
                        Name = "Risky Turn",
                        Description = "Thrilling game of chance where players risk it all for reward, testing their luck and courage. Inspired by Russian roulette.",
                        Price = 500,
                        Difficulty = 1
                    },
                    new Minigame
                    {
                        MinigameId = "blackjack",
                        Name = "Lucky 21",
                        Description = "Fast-paced card game where players aim for a hand value as close to 21 as possible. Rules based on the well-known Black Jack.",
                        Price = 300,
                        Difficulty = 1
                    },
                    new Minigame
                    {
                        MinigameId = "cupsandcoins",
                        Name = "Cups & Coins",
                        Description = "Players guess under which cup the hidden object is located, based on luck and intuition. Based on the shell game.",
                        Price = 200,
                        Difficulty = 1
                    }

                );
            });


            /*
             * modelBuilder.Entity<Food>(ent =>
            {
                ent.HasData(
                    new Food
                    {
                        FoodId = "hotdog",
                        Name = "Hot Dog",
                        Description = "A classic hot dog with mustard and ketchup.",
                        Price = 5,
                        RestoreValue = 10
                    },
                    new Food
                    {
                        FoodId = "burger",
                        Name = "Burger",
                        Description = "A delicious beef burger with lettuce, tomato, and cheese.",
                        Price = 10,
                        RestoreValue = 20
                    },
                    new Food
                    {
                        FoodId = "pizza",
                        Name = "Pizza",
                        Description = "A large pepperoni pizza with extra cheese.",
                        Price = 15,
                        RestoreValue = 30
                    },
                    new Food
                    {
                        FoodId = "salad",
                        Name = "Salad",
                        Description = "A fresh garden salad with a variety of vegetables.",
                        Price = 8,
                        RestoreValue = 15
                    },
                    new Food
                    {
                        FoodId = "langos",
                        Name = "Lángos",
                        Description = "A traditional Hungarian deep-fried flatbread topped with garlic, sour cream, and cheese.",
                        Price = 7,
                        RestoreValue = 12
                    },
                    new Food
                    {
                        FoodId = "goulash",
                        Name = "Goulash",
                        Description = "A hearty Hungarian stew made with beef, vegetables, and paprika.",
                        Price = 12,
                        RestoreValue = 25
                    },
                    new Food
                    {
                        FoodId = "cottoncandy",
                        Name = "Cotton Candy",
                        Description = "A fluffy and sweet treat made from spun sugar.",
                        Price = 4,
                        RestoreValue = 8
                    }
                );
            });
            modelBuilder.Entity<Drink>(ent =>
            {
                ent.HasData(
                    new Drink
                    {
                        DrinkId = "water",
                        Name = "Water",
                        Description = "A refreshing glass of water.",
                        Price = 2,
                        RestoreValue = 3,
                        IsAlcoholic = false
                    },
                    new Drink
                    {
                        DrinkId = "soda",
                        Name = "Soda",
                        Description = "A refreshing carbonated soft drink.",
                        Price = 3,
                        RestoreValue = 5,
                        IsAlcoholic = false
                    },
                    new Drink
                    {
                        DrinkId = "beer",
                        Name = "Beer",
                        Description = "A cold glass of beer.",
                        Price = 6,
                        RestoreValue = 10,
                        IsAlcoholic = true,
                        AlcoholContent = 5
                    },
                    new Drink
                    {
                        DrinkId = "wine",
                        Name = "Wine",
                        Description = "A glass of fine wine.",
                        Price = 8,
                        RestoreValue = 12,
                        IsAlcoholic = true,
                        AlcoholContent = 12
                    },
                    new Drink
                    {
                        DrinkId = "palinka",
                        Name = "Pálinka",
                        Description = "A traditional Hungarian fruit brandy, known for its strong flavor and high alcohol content.",
                        Price = 10,
                        RestoreValue = 15,
                        IsAlcoholic = true,
                        AlcoholContent = 40
                    },
                    new Drink
                    {
                        DrinkId = "fruitsmoothie",
                        Name = "Fruit Smoothie",
                        Description = "A healthy and refreshing blend of fresh fruits.",
                        Price = 5,
                        RestoreValue = 8,
                        IsAlcoholic = false
                    },
                    new Drink
                    {
                        DrinkId = "gintonic",
                        Name = "Gin Tonic",
                        Description = "A classic cocktail made with gin and tonic water, garnished with a slice of lime.",
                        Price = 9,
                        RestoreValue = 14,
                        IsAlcoholic = true,
                        AlcoholContent = 15
                    },
                    new Drink
                    {
                        DrinkId = "pepermintliqueur",
                        Name = "Peppermint Liqueur",
                        Description = "A sweet and minty liqueur made from peppermint leaves, perfect for a refreshing after-dinner drink.",
                        Price = 7,
                        RestoreValue = 10,
                        IsAlcoholic = true,
                        AlcoholContent = 25
                    },
                    new Drink
                    {
                        DrinkId = "eggnog",
                        Name = "Eggnog",
                        Description = "A rich and creamy holiday drink made with milk, cream, sugar, whipped egg whites, and egg yolks, often spiked with rum or bourbon.",
                        Price = 6,
                        RestoreValue = 9,
                        IsAlcoholic = true,
                        AlcoholContent = 20
                    },
                    new Drink
                    {
                        DrinkId = "slushy",
                        Name = "Slushy",
                        Description = "A cold and refreshing slushy drink made with crushed ice and flavored syrup, perfect for hot days.",
                        Price = 4,
                        RestoreValue = 6,
                        IsAlcoholic = false
                    }
                );
            });
             */


            modelBuilder.Entity<Consumable>(ent =>
            {
                ent.HasData(
                    // Food items
                    new Consumable
                    {
                        ConsumableId = "hotdog",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Hot Dog",
                        Description = "A classic hot dog with mustard and ketchup.",
                        Price = 5,
                        HungerRestoreValue = 10,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "burger",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Burger",
                        Description = "A delicious beef burger with lettuce, tomato, and cheese.",
                        Price = 10,
                        HungerRestoreValue = 20,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "pizza",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Pizza",
                        Description = "A large pepperoni pizza with extra cheese.",
                        Price = 15,
                        HungerRestoreValue = 30,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "salad",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Salad",
                        Description = "A fresh garden salad with a variety of vegetables.",
                        Price = 8,
                        HungerRestoreValue = 15,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "langos",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Lángos",
                        Description = "A traditional Hungarian deep-fried flatbread topped with garlic, sour cream, and cheese.",
                        Price = 7,
                        HungerRestoreValue = 12,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "goulash",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Goulash",
                        Description = "A hearty Hungarian stew made with beef, vegetables, and paprika.",
                        Price = 12,
                        HungerRestoreValue = 25,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "cottoncandy",
                        Type = Consumable.ConsumableType.Food,
                        Name = "Cotton Candy",
                        Description = "A fluffy and sweet treat made from spun sugar.",
                        Price = 4,
                        HungerRestoreValue = 8,
                        ThirstRestoreValue = 0,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },

                    // Drink items
                    new Consumable
                    {
                        ConsumableId = "water",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Water",
                        Description = "A refreshing glass of water.",
                        Price = 2,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 3,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "soda",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Soda",
                        Description = "A refreshing carbonated soft drink.",
                        Price = 3,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 5,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "beer",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Beer",
                        Description = "A cold glass of beer.",
                        Price = 6,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 10,
                        IsAlcoholic = true,
                        AlcoholContent = 5
                    },
                    new Consumable
                    {
                        ConsumableId = "wine",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Wine",
                        Description = "A glass of fine wine.",
                        Price = 8,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 12,
                        IsAlcoholic = true,
                        AlcoholContent = 12
                    },
                    new Consumable
                    {
                        ConsumableId = "palinka",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Pálinka",
                        Description = "A traditional Hungarian fruit brandy, known for its strong flavor and high alcohol content.",
                        Price = 10,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 15,
                        IsAlcoholic = true,
                        AlcoholContent = 40
                    },
                    new Consumable
                    {
                        ConsumableId = "fruitsmoothie",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Fruit Smoothie",
                        Description = "A healthy and refreshing blend of fresh fruits.",
                        Price = 5,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 8,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    },
                    new Consumable
                    {
                        ConsumableId = "gintonic",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Gin Tonic",
                        Description = "A classic cocktail made with gin and tonic water, garnished with a slice of lime.",
                        Price = 9,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 14,
                        IsAlcoholic = true,
                        AlcoholContent = 15
                    },
                    new Consumable
                    {
                        ConsumableId = "pepermintliqueur",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Peppermint Liqueur",
                        Description = "A sweet and minty liqueur made from peppermint leaves, perfect for a refreshing after-dinner drink.",
                        Price = 7,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 10,
                        IsAlcoholic = true,
                        AlcoholContent = 25
                    },
                    new Consumable
                    {
                        ConsumableId = "eggnog",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Eggnog",
                        Description = "A rich and creamy holiday drink made with milk, cream, sugar, whipped egg whites, and egg yolks, often spiked with rum or bourbon.",
                        Price = 6,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 9,
                        IsAlcoholic = true,
                        AlcoholContent = 20
                    },
                    new Consumable
                    {
                        ConsumableId = "slushy",
                        Type = Consumable.ConsumableType.Drink,
                        Name = "Slushy",
                        Description = "A cold and refreshing slushy drink made with crushed ice and flavored syrup, perfect for hot days.",
                        Price = 4,
                        HungerRestoreValue = 0,
                        ThirstRestoreValue = 6,
                        IsAlcoholic = false,
                        AlcoholContent = 0
                    }
                );
            });
        }
    }
}
