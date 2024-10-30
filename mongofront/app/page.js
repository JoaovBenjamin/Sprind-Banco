import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sistema de Saúde</h1>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Cadastrar Hospital</h2>
        <Link href="/hospital" className="text-blue-500 underline">
          Ir para o Formulário de criação Hospital
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Cadastrar Paciente</h2>
        <Link href="/paciente" className="text-blue-500 underline">
          Ir para o Formulário de criação Paciente
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Consultar hospital</h2>
        <Link href="/getHospital" className="text-blue-500 underline">
          Buscar hospital
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Consultar Paciente</h2>
        <Link href="/getPaciente" className="text-blue-500 underline">
          Buscar hospital
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Deletar Hospital</h2>
        <Link href="/deleteHospital" className="text-blue-500 underline">
          Deletar Hospital
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Deletar Paciente</h2>
        <Link href="/deletePaciente" className="text-blue-500 underline">
          Deletar Hospital
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Alterar Hospital</h2>
        <Link href="/putHospital" className="text-blue-500 underline">
          Alterar Hospital
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Alterar Paciente</h2>
        <Link href="/putPaciente" className="text-blue-500 underline">
          Alterar Paciente
        </Link>
      </div>
    </div>
  );
}
