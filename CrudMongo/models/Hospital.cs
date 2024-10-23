using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CrudMongo.models
{
    public class Hospital
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? id { get; set; }

        [BsonElement("Nome")]
        public string? Nome { get; set; } = null;

        [BsonElement("Endereço")]
        public string? Endereco { get; set; } = null;

        [BsonElement("Cidade")]
        public string? Cidade { get; set; } = null;

        [BsonElement("Estado")]
        public string? Estado { get; set; } = null;

        [BsonElement("CodigoPostal")]
        public string? CodigoPostal { get; set; } = null;

        [BsonElement("Telefone")]
        public string? Telefone { get; set; } = null;

        [BsonElement("CNPJ")]
        public string? CNPJ { get; set; } = null;

        [BsonElement("Capacidade")]
        public int Capacidade { get; set; }

        [BsonElement("LeitosDisponiveis")]
        public int LeitosDisponiveis { get; set; }

        [BsonElement("ServicosEmergencia")]
        public bool ServicosEmergencia { get; set; }
    }
}
