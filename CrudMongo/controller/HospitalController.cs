using CrudMongo.models;
using CrudMongo.Services;
using Microsoft.AspNetCore.Mvc;

namespace CrudMongo.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : Controller
    {
        private readonly HospitalService _hospitalService;

        public HospitalController(HospitalService hospitalService){
            _hospitalService = hospitalService;
        }

        [HttpGet]
        public async Task<List<Hospital>> GetHospitals()
            => await _hospitalService.GetAsync();

         [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Hospital>> Get([FromRoute]string id)
    {
        var Hospital = await _hospitalService.GetAsync(id);

        if (Hospital is null)
        {
            return NotFound();
        }

        return Hospital;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody]Hospital Hospital)
    {
        await _hospitalService.CreateAsync(Hospital);

        return CreatedAtAction(nameof(Get), new { id = Hospital.id }, Hospital);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update([FromRoute]string id, [FromBody]Hospital Hospital)
    {
        var _Hospital = await _hospitalService.GetAsync(id);

        if (_Hospital is null)
        {
            return NotFound();
        }

        Hospital.id = _Hospital.id;

        await _hospitalService.UpdateAsync(id, Hospital);

        return Ok();
    }

      [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete([FromRoute]string id)
    {
        var Hospital = await _hospitalService.GetAsync(id);

        if (Hospital is null)
        {
            return NotFound();
        }

        await _hospitalService.RemoveAsync(id);

        return NoContent();
    }

    }
}