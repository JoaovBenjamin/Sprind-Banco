using CrudMongo.models;
using CrudMongo.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<HospitalDatabaseSettings>(
    builder.Configuration.GetSection("DevNetStoreDatabaseHospital"));
builder.Services.Configure<PacienteDatabaseSettings>(
    builder.Configuration.GetSection("DevNetStoreDatabasePaciente"));

builder.Services.AddSingleton<HospitalService>();
builder.Services.AddSingleton<PacienteService>();

builder.Services.AddControllers();

// Adicionando CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseHttpsRedirection();

// Habilitando CORS
app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
