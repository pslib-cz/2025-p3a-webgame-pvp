using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Models;

namespace UsAgainstTheOdds.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }
        public DbSet<Minigame> Minigames { get; set; }
        public DbSet<Consumable> Consumables { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Cutscene> Cutscenes { get; set; }
        public DbSet<Ending> Endings { get; set; }

        
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
                    },
                    new Minigame
                    {
                        MinigameId = "slots",
                        Name = "Spiny spin",
                        Description = "Player spins Slot machine and hopes for all three symbols to be same",
                        Price = 100,
                        Difficulty = 1
                    },
                    new Minigame
                    {
                        MinigameId = "whackamole",
                        Name = "Whack a Mole",
                        Description = "Player is whacking moles.",
                        Price = 100,
                        Difficulty = 3
                    },
                    new Minigame
                    {
                        MinigameId = "memorymatch",
                        Name = "Memory Match",
                        Description = "Player is matching pairs of cards.",
                        Price = 150,
                        Difficulty = 2
                    }
                );
            });
            

            modelBuilder.Entity<Item>(ent =>
            {
                ent.HasData(
                    new Item
                    {
                        ItemId = "brownbear",
                        Name = "Brown Bear",
                        Price = 10000,
                        RelationRestoreValue = 20,
                        Description = "A cuddly brown bear plush toy."
                    },
                    new Item
                    {
                        ItemId = "whitebear",
                        Name = "White Bear",
                        Price = 11000,
                        RelationRestoreValue = 20,
                        Description = "A cuddly white bear plush toy."
                    },
                    new Item
                    {
                        ItemId = "pinkbear",
                        Name = "Pink Bear",
                        Price = 12000,
                        RelationRestoreValue = 20,
                        Description = "A cuddly pink bear plush toy."
                    },
                    new Item
                    {
                        ItemId = "tulip",
                        Name = "Tulip",
                        Price = 500,
                        RelationRestoreValue = 30,
                        Description = "A beautiful tulip flower."
                    },
                    new Item
                    {
                        ItemId = "sunflower",
                        Name = "Sunflower",
                        Price = 600,
                        RelationRestoreValue = 32,
                        Description = "A bright sunflower."
                    },
                    new Item
                    {
                        ItemId = "rose",
                        Name = "Rose",
                        Price = 700,
                        RelationRestoreValue = 35,
                        Description = "A romantic red rose."
                    },
                    new Item
                    {
                        ItemId = "gingerbreadheart",
                        Name = "Gingerbread Heart",
                        Price = 200,
                        RelationRestoreValue = 10,
                        Description = "A sweet gingerbread heart cookie."
                    }


                    );
            });


            modelBuilder.Entity<Consumable>(ent =>
            {
                ent.HasData(
                    // Food items
                    new Consumable
                    {
                        ConsumableId = "hotdog",
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.food,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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
                        Type = Enums.ConsumableType.drink,
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


            modelBuilder.Entity<Cutscene>(ent =>
            {
                ent.Property(e => e.CutsceneId).ValueGeneratedOnAdd();

                ent.HasData(
                    new Cutscene
                    {
                        CutsceneId = 1,
                        Type = "intro",
                        Order = 1,
                        Text = "We’ve got nothing left but a few last coins and this city, ready to swallow us whole.",
                        Speaker = Enums.SpeakerType.boy,
                        ImageUrl = "/images/Cutscene/Intro/Intro1.png",
                        ButtonText = "Continue"
                    },
                    new Cutscene
                    {
                        CutsceneId = 2,
                        Type = "intro",
                        Order = 2,
                        Text = "But we can’t give up now. We have to take a chance, no matter the odds.",
                        Speaker = Enums.SpeakerType.girl,
                        ImageUrl = "/images/Cutscene/Intro/Intro2.png",
                        ButtonText = "Continue"
                    },
                    new Cutscene
                    {
                        CutsceneId = 3,
                        Type = "intro",
                        Order = 3,
                        Text = "This casino is our only shot—either we win big today, or we lose the little we have left.",
                        Speaker = Enums.SpeakerType.boy,
                        ImageUrl = "/images/Cutscene/Intro/Intro3.png",
                        ButtonText = "Continue"
                    },
                    new Cutscene
                    {
                        CutsceneId = 4,
                        Type = "intro",
                        Order = 4,
                        Text = "Take a breath, we're going in... today, it's the two of us against the odds.",
                        Speaker = Enums.SpeakerType.girl,
                        ImageUrl = "/images/Cutscene/Intro/Intro4.png",
                        ButtonText = "Let's go!"
                    }

                );
            });


            modelBuilder.Entity<Ending>(ent =>
            {
                ent.Property(e => e.EndingId).ValueGeneratedOnAdd();

                ent.HasData(
                    new Ending
                    {
                        EndingId = 1,
                        Reason = "victory",
                        Title = "You Win!",
                        Message = "You fullfilled your girlfriend's dream and won enough money to start a new life together!",
                        ImageUrl = "/images/Endings/Victory.png"
                    },
                    new Ending
                    {
                        EndingId = 2,
                        Reason = "breakup",
                        Title = "You Broke Up",
                        Message = "Your girlfriend broke up with you, because you didn't pay attention to her.",
                        ImageUrl = "/images/Endings/Breakup.png"
                    },
                    new Ending
                    {
                        EndingId = 3,
                        Reason = "bankrupt",
                        Title = "You Went Bankrupt",
                        Message = "You lost all your money at the casino. Your girlfriend is disappointed.",
                        ImageUrl = "/images/Endings/Bankrupt.png"
                    },
                    new Ending
                    {
                        EndingId = 4,
                        Reason = "hungry",
                        Person = "boy",
                        Title = "You Went Hungry",
                        Message = "You didn't eat anything and collapsed from hunger. Your girlfriend is disappointed.",
                        ImageUrl = "/images/Endings/HungryBoy.png"
                    },
                    new Ending
                    {
                        EndingId = 5,
                        Reason = "hungry",
                        Person = "girl",
                        Title = "Your Girlfriend Went Hungry",
                        Message = "She didn't eat anything and collapsed from hunger.",
                        ImageUrl = "/images/Endings/HungryGirl.png"
                    },
                    new Ending
                    {
                        EndingId = 6,
                        Reason = "thirsty",
                        Person = "boy",
                        Title = "You Got Thirsty",
                        Message = "You didn't drink anything and collapsed from thirst.",
                        ImageUrl = "/images/Endings/ThirstyBoy.png"
                    },
                    new Ending
                    {
                        EndingId = 7,
                        Reason = "thirsty",
                        Person = "girl",
                        Title = "Your Girlfriend Got Thirsty",
                        Message = "She didn't drink anything and collapsed from thirst.",
                        ImageUrl = "/images/Endings/ThirstyGirl.png"
                    },
                    new Ending
                    {
                        EndingId = 8,
                        Reason = "drunk",
                        Person = "boy",
                        Title = "You Got Drunk",
                        Message = "You drank too much alcohol and passed out. Your girlfriend is disappointed.",
                        ImageUrl = "/images/Endings/DrunkBoy.png"
                    },
                    new Ending
                    {
                        EndingId = 9,
                        Reason = "drunk",
                        Person = "girl",
                        Title = "Your Girlfriend Got Drunk",
                        Message = "She drank too much alcohol and passed out.",
                        ImageUrl = "/images/Endings/DrunkGirl.png"
                    }
                );
            });
        }
    }
}
