'use client';
import { useState } from 'react';

const GetpacienteById = () => {
    const [paciente, setPaciente] = useState(null);
    const [error, setError] = useState(null);
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5032/api/paciente/${id}`);
            if (!response.ok) {
                throw new Error('paciente não encontrado ou erro de rede');
            }
            const data = await response.json();
            console.log(data); // Verifique os dados retornados
            setPaciente(data); // Armazena o paciente encontrado
            setError(null);
        } catch (err) {
            setError(err.message);
            setPaciente(null); // Reseta os dados do paciente em caso de erro
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">Consultar paciente pelo ID</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Digite o ID do paciente"
                    className="border p-2 w-full mb-4 rounded"
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    type="submit">
                    Buscar
                </button>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {paciente && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Dados do paciente:</h3>
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        <p><strong>Nome:</strong> {paciente.nome}</p>
                        <p><strong>Endereço:</strong> {paciente.endereco}</p>
                        <p><strong>Cidade:</strong> {paciente.cidade}</p>
                        <p><strong>Estado:</strong> {paciente.estado}</p>
                        <p><strong>Idade:</strong> {paciente.idade}</p>
                        <p><strong>Telefone:</strong> {paciente.telefone}</p>
                        <p><strong>CPF:</strong> {paciente.cpf}</p>
                        <p><strong>Data de Admissao:</strong> {paciente.dataAdmissao}</p>
                        <p><strong>Diagnostico:</strong> {paciente.diaginostico}</p>
                        <p><strong>Medicamento:</strong> {paciente.medicamento}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetpacienteById;
