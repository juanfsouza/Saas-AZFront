"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Olá, meu nome é Agent...", "Como posso ajudá-lo?"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loop % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting]);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      style={{
        backgroundImage: `url('/mod-img-14.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Imagens animadas */}
      <motion.div
        className="absolute top-0 left-0"
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/AI-blur-1.png"
          alt="Blur Shape 1"
          width={600}
          height={600}
          className="opacity-100"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0"
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/AI-blur-2-new.png"
          alt="Blur Shape 2"
          width={500}
          height={500}
          className="opacity-100"
          style={{ transform: "translate(0vw, 30vh) rotate(0deg)" }}
        />
      </motion.div>

      {/* Balão de mensagem */}
      <div className="absolute top-72 left-96 bg-white text-black px-4 py-2 rounded-lg shadow-lg">
        <p className="font-medium">{currentText}</p>
      </div>

      {/* Imagem principal */}
      <div className="relative">
        <Image
          src="/mod-img-13.png"
          alt="AI Personal Consultant"
          width={650}
          height={650}
          className="shadow-lg"
        />
      </div>

      {/* Texto principal */}
      <div className="text-center relative bottom-36 "> {/* Adicione -mt-16 ou ajuste conforme necessário */}
        <h1 className="font-bold text-6xl">AI AgentZap</h1>
        <div className="flex justify-center mt-1 space-x-4">
          <div className="flex bg-blackpin rounded-full px-4 py-1 items-center space-x-2">
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            <span>Econômico</span>
          </div>
          <div className="flex bg-blackpin rounded-full px-4 py-1 items-center space-x-3">
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            <span>24/7 Avaliação</span>
          </div>
          <div className="flex bg-blackpin rounded-full px-4 py-1 items-center space-x-2">
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            <span>Flexivel</span>
          </div>
        </div>
      </div>

      {/* Caixa de chat */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 md:w-1/2 text-black rounded-lg shadow-lg">
        {/* Parte superior (fundo branco) */}
        <div className="p-4 bg-whitepin rounded-t-lg ">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-black">Como posso ajudá-lo?</h2>
            <button className="text-blue-800 font-semibold">Nova Mensagem</button>
          </div>
        </div>

        {/* Parte inferior (fundo preto) */}
        <div className="bg-blackpin p-5 rounded-b-lg flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type your message ..."
            className="flex-1 p-5 rounded-full bg-black text-gray-300 placeholder-gray-500 outline-none"
          />
          <button className="bg-purple-700 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-800 transition">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
