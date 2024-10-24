import { useState } from 'react';

const PacienteForm = () => {
    const [formData, setFormData] = useState({
        Nome: '',
        Idade: '',
        Genero: '',
        Endereco: '',
        Cidade: '',
        Estado: '',
        Telefone: '',
        DataAdmissao: '',
        Diagnostico: '',
        Medicamento: '',
        CPF: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData))
        const response = await fetch('http://localhost:5032/api/paciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setFormData({
                Nome: '',
                Idade: '',
                Genero: '',
                Endereco: '',
                Cidade: '',
                Estado: '',
                Telefone: '',
                DataAdmissao: '',
                Diagnostico: '',
                Medicamento: '',
                CPF: '',
            });
            alert('Paciente cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar paciente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Cadastro de Paciente</h2>
            {Object.keys(formData).map((key) => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key}
                    </label>
                    <input
                        type={key === 'Idade' ? 'number' : key === 'DataAdmissao' ? 'date' : 'text'}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
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

export default PacienteForm;
