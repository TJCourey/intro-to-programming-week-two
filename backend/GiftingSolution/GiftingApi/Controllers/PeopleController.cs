

using Microsoft.AspNetCore.Authorization;

namespace GiftingApi.Controllers;

[ApiController]
public class PeopleController : ControllerBase
{

    private readonly ICatalogPeople _personCatalog;
    private readonly ILogger<PeopleController> _logger;

    public PeopleController(ICatalogPeople personCatalog, ILogger<PeopleController> logger)
    {
        _personCatalog = personCatalog;
        _logger = logger;
    }

    [HttpGet("/people/{id:int}")]
    public async Task<ActionResult<PersonItemResponse>> GetPersonById(int id)
    {
        PersonItemResponse? response = await _personCatalog.GetPersonByIdAsync(id);
        if (response is null)
        {
            return NotFound();
        }
        else
        {
            return Ok(response);
        }
    }

    [HttpPost("/people")]
    public async Task<ActionResult<PersonItemResponse>> AddPerson([FromBody] PersonCreateRequest request)
    {
        // Validate the request.

        // if it's valid - do the work (add it to our database) 
        // it it is NOT valid, you send a 400 (Bad Request)
        // return a 201 Created
        // Location Header (TODO)
        // And a copy of the new thing you created.
       
        PersonItemResponse response = await _personCatalog.AddPersonAsync(request);
        return StatusCode(201, response);
    }


    // GET /people
    [HttpGet("/people")]
    public async Task<ActionResult<PersonResponse>> GetAllPeople(CancellationToken token)
    {
        try
        {
            _logger.LogInformation("Got a request to get some people...");
            await Task.Delay(3000); // wait three seconds.
            PersonResponse response = await _personCatalog.GetPeopleAsync(token);
            _logger.LogInformation($"Got some people from the DB {response.Data.Count} persons");
            return Ok(response);
        }
        catch (TaskCanceledException)
        {

            _logger.LogInformation("Fine. They hung up. No reason to send a response");
            return BadRequest();
        }
    }
}
