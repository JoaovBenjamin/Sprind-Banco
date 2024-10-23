using CrudMongo.models;
using CrudMongo.Services;
using Microsoft.AspNetCore.Mvc;

namespace CrudMongo.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : Controller
    {
        private readonly PacienteService _PacienteService;

        public PacienteController(PacienteService PacienteService)
        {
            _PacienteService = PacienteService;
        }

        [HttpGet]
        public async Task<List<Paciente>> GetPacientes()
            => await _PacienteService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Paciente>> Get(string id)
        {
            var Paciente = await _PacienteService.GetAsync(id);

            if (Paciente is null)
            {
                return NotFound();
            }

            return Paciente;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Paciente Paciente)
        {
            await _PacienteService.CreateAsync(Paciente);

            return CreatedAtAction(nameof(Get), new { id = Paciente.id }, Paciente);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Paciente Paciente)
        {
            var _Paciente = await _PacienteService.GetAsync(id);

            if (_Paciente is null)
            {
                return NotFound();
            }

            Paciente.id = _Paciente.id;

            await _PacienteService.UpdateAsync(id, Paciente);

            return Ok();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var Paciente = await _PacienteService.GetAsync(id);

            if (Paciente is null)
            {
                return NotFound();
            }

            await _PacienteService.RemoveAsync(id);

            return NoContent();
        }

    }
}