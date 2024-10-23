using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CrudMongo.models
{
    public class Paciente
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? id { get; set; }

        [BsonElement("Nome")]
        public string? Nome { get; set; } = null;

        [BsonElement("Idade")]
        public int Idade { get; set; }

        [BsonElement("Genero")]
        public string? Genero { get; set; } = null;

        [BsonElement("Endereco")]
        public string? Endereco { get; set; } = null;

        [BsonElement("Cidade")]
        public string? Cidade { get; set; } = null;

        [BsonElement("Estado")]
        public string? Estado { get; set; } = null;

        [BsonElement("Telefone")]
        public string? Telefone { get; set; } = null;

        [BsonElement("DataAdmissao")]
        public DateTime DataAdmissao { get; set; }

        [BsonElement("Diagnostico")]
        public string? Diagnostico { get; set; } = null;

        [BsonElement("Medicamento")]
        public string? Medicamento { get; set; } = null;

        [BsonElement("CPF")]
        public string? CPF { get; set; } = null;
    }
}
