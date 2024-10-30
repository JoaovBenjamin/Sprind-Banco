'use client'; // Marca este componente como um componente do lado do cliente

import { useState } from 'react';

const UpdateHospitalForm = () => {
    const [id, setId] = useState(''); // Estado para armazenar o ID do hospital
    const [formData, setFormData] = useState({
        Nome: '',
        Endereco: '',
        Cidade: '',
        Estado: '',
        CodigoPostal: '',
        Telefone: '',
        CNPJ: '',
        Capacidade: '',
        LeitosDisponiveis: '',
        ServicosEmergencia: false,
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value),
        });
    };

    const handleIdChange = (e) => {
        setId(e.target.value); // Atualiza o estado do ID
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5032/api/hospital/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Hospital atualizado com sucesso!');
            window.location.href = '/'; // Redireciona após a atualização
        } else {
            alert('Erro ao atualizar hospital.');
        }
    };

    const fetchHospital = async (e) => {
        e.preventDefault();
        if (!id) return; // Verifica se o ID está disponível

        const response = await fetch(`http://localhost:5032/api/hospital/${id}`);
        if (!response.ok) {
            setError('Erro ao buscar hospital.');
            return;
        }
        const data = await response.json();
        setFormData(data); // Atualiza o formulário com os dados do hospital
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Atualização de Hospital</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                    ID do Hospital
                </label>
                <input
                    type="text"
                    name="id"
                    value={id}
                    onChange={handleIdChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                    type="button"
                    onClick={fetchHospital}
                    className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Buscar Hospital
                </button>
            </div>
            {Object.keys(formData).map((key) => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key}
                    </label>
                    {typeof formData[key] === 'boolean' ? (
                        <input
                            type="checkbox"
                            name={key}
                            checked={formData[key]}
                            onChange={handleChange}
                            className="w-4 h-4"
                        />
                    ) : (
                        <input
                            type={key === 'Capacidade' || key === 'LeitosDisponiveis' ? 'number' : 'text'}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    )}
                </div>
            ))}
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Atualizar
            </button>
        </form>
    );
};

export default UpdateHospitalForm;
