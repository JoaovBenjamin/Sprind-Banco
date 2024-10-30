import DeleteHospital from "../components/deleteHospital";

const getHospitalPage = () => {
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Deletar Hospital</h1>
                <DeleteHospital />
            </div>
        </>
    )

}

export default getHospitalPage;