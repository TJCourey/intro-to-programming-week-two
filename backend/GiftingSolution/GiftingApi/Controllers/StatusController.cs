using GiftingApi.Adapters;

namespace GiftingApi.Controllers;

public class StatusController : ControllerBase
{

    private readonly OnCallLookupApiAdapter _api;

    public StatusController(OnCallLookupApiAdapter api)
    {
        _api = api;
    }

    [HttpGet("/status")]
    public async Task<ActionResult> GetApiStatus()
    {
        var dev = await _api.GetOnCallDeveloperAsync();
        var response = new StatusResponse(
            "All Good!", DateTime.Now, dev!);
        return Ok(response);
    }
}


/*
 {
    "status": "All Good Here",
    "lastChecked": "some date time",
    "onCallDeveloper": {

        "name": "Joe Smith",    
        "email": "joe@aol.com"
    }

}*/

public record StatusResponse(string Status, DateTime LastChecked, OnCallDeveloperResponse onCallDeveloper);