'use client';
import { useState } from 'react';

const DeleteHospital = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5032/api/hospital/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar hospital');
            }

            setMessage('Hospital deletado com sucesso!');
            setError(null);
            setId(''); // Limpa o campo de entrada
        } catch (err) {
            setError(err.message);
            setMessage('');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">Deletar Hospital pelo ID</h1>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Digite o ID do hospital"
                    className="border p-2 w-full mb-4 rounded"
                />
                <button
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                    type="submit">
                    Deletar
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
    );
};

export default DeleteHospital;
