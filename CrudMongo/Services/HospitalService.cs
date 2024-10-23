
using CrudMongo.models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CrudMongo.Services
{
    public class HospitalService
    {
        private readonly IMongoCollection<Hospital> _hospitalCollection;

        public HospitalService(IOptions<HospitalDatabaseSettings> HospitalService)
        {
            var mongoClient = new MongoClient(HospitalService.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(HospitalService.Value.DatabaseName);

            _hospitalCollection = mongoDatabase.GetCollection<Hospital>
                (HospitalService.Value.HospitalCollectionName);

        }

        public async Task<List<Hospital>> GetAsync() =>
            await _hospitalCollection.Find(x => true).ToListAsync();

        public async Task<Hospital> GetAsync(string id) =>
            await _hospitalCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Hospital Hospital) =>
            await _hospitalCollection.InsertOneAsync(Hospital);
        public async Task UpdateAsync(string id, Hospital Hospital) =>
            await _hospitalCollection.ReplaceOneAsync(x => x.id == id, Hospital);
        public async Task RemoveAsync(string id) =>
            await _hospitalCollection.DeleteOneAsync(x => x.id == id);
    }
}