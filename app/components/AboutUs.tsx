"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Seu Cliente Quer Uma Resposta Pra Ontem",
      description:
        "Atualmente, até mesmo segundos podem fazer uma enorme diferença. Se você não oferecer a resposta que seu cliente procura no momento certo, sabe o que vai acontecer? Ele irá buscar a solução em outro lugar.",
    },
    {
      number: "02",
      title: "Vai mais um reforço ai",
      description:
        "Já pensou em receber passes perfeitos dentro da área, prontos para chutar e marcar? É exatamente isso que os robôs fazem pela sua equipe. Eles atendem os chamados e entregam todas as informações necessárias, deixando tudo pronto para sua equipe marcar o gol com precisão.",
    },
    {
      number: "03",
      title: "Venda mais e capture leads automaticamente, 24 horas por dia, 7 dias por semana!",
      description:
        "Atenda seus clientes como os grandes players do mercado. Empresas como Facebook, NBA, Disney e Spotify já utilizam chatbots para impulsionar suas vendas em até 800%. Agora é a sua vez de alcançar resultados incríveis! 🚀",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">
        <h3 className="uppercase text-sm font-semibold mb-4 tracking-widest">
          AgentZap foi desenvolvido especialmente para empresários e autônomos
        </h3>
        <h2 className="text-4xl font-bold mb-12 leading-tight">
          você pode criar facilmente conversas<span className="text-gray-400"> inteligentes para o WhatsApp</span>
          <br />
          ajudando o seu negócio a crescer de forma automatizada e eficiente.
        </h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center border-t border-gray-600 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Número */}
              <div className="text-7xl font-bold text-gray-500 w-1/6">{service.number}</div>

              {/* Conteúdo */}
              <div className="w-4/6">
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>

              {/* Ícone de seta */}
              <div className="w-1/6 text-right">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-block text-2xl text-gray-500 cursor-pointer"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}