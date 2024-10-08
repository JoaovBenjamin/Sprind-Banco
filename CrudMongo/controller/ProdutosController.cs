using CrudMongo.models;
using CrudMongo.Services;
using Microsoft.AspNetCore.Mvc;

namespace CrudMongo.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : Controller
    {
        private readonly ProdutoService _produtoService;

        public ProdutosController(ProdutoService produtoService){
            _produtoService = produtoService;
        }

        [HttpGet]
        public async Task<List<Produto>> GetProdutos()
            => await _produtoService.GetAsync();

         [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Produto>> Get(string id)
    {
        var produto = await _produtoService.GetAsync(id);

        if (produto is null)
        {
            return NotFound();
        }

        return produto;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Produto produto)
    {
        await _produtoService.CreateAsync(produto);

        return CreatedAtAction(nameof(Get), new { id = produto.id }, produto);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Produto produto)
    {
        var _produto = await _produtoService.GetAsync(id);

        if (_produto is null)
        {
            return NotFound();
        }

        produto.id = _produto.id;

        await _produtoService.UpdateAsync(id, produto);

        return Ok();
    }

      [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var produto = await _produtoService.GetAsync(id);

        if (produto is null)
        {
            return NotFound();
        }

        await _produtoService.RemoveAsync(id);

        return NoContent();
    }

    }
}