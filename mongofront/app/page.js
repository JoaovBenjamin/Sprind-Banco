import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sistema de Saúde</h1>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Cadastrar Hospital</h2>
        <Link href="/hospital" className="text-blue-500 underline">
          Ir para o Formulário de Hospital
        </Link>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Cadastrar Paciente</h2>
        <Link href="/paciente" className="text-blue-500 underline">
          Ir para o Formulário de Paciente
        </Link>
      </div>
    </div>
  );
}
