'use client';
import { useState } from 'react';

const GetHospitalById = () => {
    const [hospital, setHospital] = useState(null);
    const [error, setError] = useState(null);
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5032/api/hospital/${id}`);
            if (!response.ok) {
                throw new Error('Hospital não encontrado ou erro de rede');
            }
            const data = await response.json();
            console.log(data); // Verifique os dados retornados
            setHospital(data); // Armazena o hospital encontrado
            setError(null);
        } catch (err) {
            setError(err.message);
            setHospital(null); // Reseta os dados do hospital em caso de erro
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">Consultar Hospital pelo ID</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Digite o ID do hospital"
                    className="border p-2 w-full mb-4 rounded"
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    type="submit">
                    Buscar
                </button>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {hospital && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Dados do Hospital:</h3>
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        <p><strong>Nome:</strong> {hospital.nome}</p>
                        <p><strong>Endereço:</strong> {hospital.endereco}</p>
                        <p><strong>Cidade:</strong> {hospital.cidade}</p>
                        <p><strong>Estado:</strong> {hospital.estado}</p>
                        <p><strong>Código Postal:</strong> {hospital.codigoPostal}</p>
                        <p><strong>Telefone:</strong> {hospital.telefone}</p>
                        <p><strong>CNPJ:</strong> {hospital.cnpj}</p>
                        <p><strong>Capacidade:</strong> {hospital.capacidade}</p>
                        <p><strong>Leitos Disponíveis:</strong> {hospital.leitosDisponiveis}</p>
                        <p><strong>Serviços de Emergência:</strong> {hospital.servicosEmergencia ? 'Sim' : 'Não'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetHospitalById;
