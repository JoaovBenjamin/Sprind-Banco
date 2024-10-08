
using CrudMongo.models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CrudMongo.Services
{
    public class ProdutoService
    {
        private readonly IMongoCollection<Produto> _produtoCollection;

     public ProdutoService(IOptions<ProdutoDatabaseSettings> produtoServices)
        {
            var mongoClient = new MongoClient(produtoServices.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(produtoServices.Value.DatabaseName);

            _produtoCollection = mongoDatabase.GetCollection<Produto>
                (produtoServices.Value.ProdutoCollectionName);

        }

        public async Task<List<Produto>> GetAsync() => 
            await _produtoCollection.Find(x => true).ToListAsync();

        public async Task<Produto> GetAsync(string id) => 
            await _produtoCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Produto produto) => 
            await _produtoCollection.InsertOneAsync(produto);
        public async Task UpdateAsync(string id, Produto produto) => 
            await _produtoCollection.ReplaceOneAsync(x => x.id == id, produto);
        public async Task RemoveAsync(string id) => 
            await _produtoCollection.DeleteOneAsync(x => x.id == id);
    }
}