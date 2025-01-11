export default function Testimonials() {
    return (
      <section className="container mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-10">O que Nossos Clientes Dizem</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic">"O serviço de AI transformou nosso negócio. A produtividade aumentou em 40%!"</p>
            <p className="mt-4 font-semibold">- Cliente Satisfeito</p>
          </div>
          {/* Adicione mais depoimentos conforme necessário */}
        </div>
      </section>
    );
  }
  