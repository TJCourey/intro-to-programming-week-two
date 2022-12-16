using DeveloperLookup;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.



app.MapGet("/developer", () => {
    var dev = DeveloperLookupUtils.GetDeveloperName();
    var response = new OnCallDeveloperResponse(dev, $"{dev}@hypertheory.com");
    return Results.Ok(response);
});
app.Run();


public record OnCallDeveloperResponse(string Name, string Email);