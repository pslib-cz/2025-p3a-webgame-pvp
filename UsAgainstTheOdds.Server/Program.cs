using Microsoft.EntityFrameworkCore;
using UsAgainstTheOdds.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Default") ?? "Filename=UsAgainstTheOdds.sqlite"));


// Configure CORS to allow requests from any origin
builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseRouting();

// Enable CORS
app.UseCors("DevCors");

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
