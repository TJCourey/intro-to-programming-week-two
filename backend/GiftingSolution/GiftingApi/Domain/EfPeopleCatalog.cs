using GiftingApi.Adapters;
using Microsoft.EntityFrameworkCore;

namespace GiftingApi.Domain;

public class EfPeopleCatalog : ICatalogPeople
{
    private readonly GiftingDataContext _context;

    public EfPeopleCatalog(GiftingDataContext context)
    {
        _context = context;
    }

    public async Task<PersonItemResponse> AddPersonAsync(PersonCreateRequest request)
    {
        // Copy the data from the request into a new PersonEntity, providing any addition data we need, and add that.
        // "Mapping" (PersonCreateRequest -> PersonEntity)
        var personToAdd = new PersonEntity
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            CreatedAt = DateTime.UtcNow,
            UnFriended = false
        };

        // DataContext is an implementation of two patterns:
            // One is a "Repository Pattern"
            // A Unit of Work Pattern

        _context.People.Add(personToAdd);

        await _context.SaveChangesAsync();

        return new PersonItemResponse(personToAdd.Id.ToString(), personToAdd.FirstName, personToAdd.LastName);


    }

    public async Task<PersonResponse> GetPeopleAsync()
    {
        // Select Id, FirstName, LastName from People where Unfriended = 0
        var data = await _context.People
             .Where(p => p.UnFriended == false) // filter
             .Select(p => new PersonItemResponse(p.Id.ToString(), p.FirstName, p.LastName)) // map
             .ToListAsync();

        return new PersonResponse(data);
    }
}
