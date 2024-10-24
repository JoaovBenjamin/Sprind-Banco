import HospitalForm from '../components/HospitalForm';

const HospitalPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Cadastro de Hospital</h1>
            <HospitalForm />
        </div>
    );
};

export default HospitalPage;
