using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CrudMongo.models
{
    public class Produto
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? id {get;set;}
        [BsonElement("Nome")]
        public string? nome {get;set;} = null;
        [BsonElement("Valor")]
        public string? valor {get;set;} = null;
       

    }
}