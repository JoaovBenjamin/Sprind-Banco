
using CrudMongo.models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CrudMongo.Services
{
    public class PacienteService
    {
        private readonly IMongoCollection<Paciente> _PacienteCollection;

        public PacienteService(IOptions<PacienteDatabaseSettings> PacienteService)
        {
            var mongoClient = new MongoClient(PacienteService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(PacienteService.Value.DatabaseName);

            _PacienteCollection = mongoDatabase.GetCollection<Paciente>
                (PacienteService.Value.PacienteCollectionName);

        }

        public async Task<List<Paciente>> GetAsync() =>
            await _PacienteCollection.Find(x => true).ToListAsync();

        public async Task<Paciente> GetAsync(string id) =>
            await _PacienteCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Paciente Paciente) =>
            await _PacienteCollection.InsertOneAsync(Paciente);
        public async Task UpdateAsync(string id, Paciente Paciente) =>
            await _PacienteCollection.ReplaceOneAsync(x => x.id == id, Paciente);
        public async Task RemoveAsync(string id) =>
            await _PacienteCollection.DeleteOneAsync(x => x.id == id);
    }
}