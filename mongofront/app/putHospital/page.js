import UpdateHospitalForm from "../components/putHospital";

const putHospitalPage = () => {
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Alterar Hospital</h1>
                <UpdateHospitalForm />
            </div>
        </>
    )

}

export default putHospitalPage;