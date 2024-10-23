using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudMongo.models
{
    public class PacienteDatabaseSettings
    {
        public string ConnectionString { get; set; } = null;
        public string DatabaseName { get; set; } = null;
        public string PacienteCollectionName { get; set; } = null;
    }
}