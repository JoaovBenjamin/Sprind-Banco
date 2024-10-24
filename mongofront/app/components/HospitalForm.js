'use client'
import { useState } from 'react';

const HospitalForm = () => {
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData)); // Debugging
        const response = await fetch('http://localhost:5032/api/hospital', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setFormData({
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
            alert('Hospital cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar hospital.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Cadastro de Hospital</h2>
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
                Cadastrar
            </button>
        </form>
    );
};

export default HospitalForm;

