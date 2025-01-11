import { FaRobot, FaChartLine, FaCog } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-10">Nossos Serviços</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded shadow">
            <FaRobot className="text-blue-700 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Automação de Processos</h4>
            <p className="text-gray-600">Automatize tarefas repetitivas e aumente a produtividade da sua equipe.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <FaChartLine className="text-blue-700 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Análise de Dados</h4>
            <p className="text-gray-600">Transforme dados em insights acionáveis para o seu negócio.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <FaCog className="text-blue-700 text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Integração de Sistemas</h4>
            <p className="text-gray-600">Integre sistemas de AI para otimizar operações e processos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
