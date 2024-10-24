'use client'
import PacienteForm from '../components/PacienteForm';

const PacientePage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Cadastro de Paciente</h1>
            <PacienteForm />
        </div>
    );
};

export default PacientePage;
