"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@headlessui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    if (!email || !password || (isRegister && !confirmPassword)) {
      setError("Todos os campos são obrigatórios");
      setLoading(false);
      return;
    }

    if (isRegister && password !== confirmPassword) {
      setError("As senhas não coincidem");
      setLoading(false);
      return;
    }

    try {
      if (isRegister) {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          setSuccess(true);
          setIsOpen(true);
        } else {
          setError(data.error || "Erro ao registrar");
        }
      } else {
        await login(email, password);
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message || "Erro ao processar");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-zinc-900 to-zinc-700/50">
      <div className="bg-zinc-800/20 p-8 rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">

        {/* Animação de transição entre telas */}
        <motion.div
          key={isRegister ? "register" : "login"}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-semibold text-white text-center mb-6 tracking-wider">
            {isRegister ? "Registrar-se" : "Login"}
          </h1>

          {error && <p className="text-red-400 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="flex items-center mt-1 bg-zinc-800 border border-gray-600 rounded-lg shadow-md relative transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-blue-400">
                <FaEnvelope className="text-gray-400 ml-3" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 bg-transparent border-none text-white outline-none placeholder-gray-400"
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Senha
              </label>
              <div className="flex items-center mt-1 bg-zinc-800 border border-gray-600 rounded-lg shadow-md relative transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-blue-400">
                <FaLock className="text-gray-400 ml-3" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 bg-transparent border-none text-white outline-none placeholder-gray-400"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            {/* Confirmar Senha (somente no registro) */}
            {isRegister && (
              <div className="relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                  Confirmar Senha
                </label>
                <div className="flex items-center mt-1 bg-zinc-800 border border-gray-600 rounded-lg shadow-md relative transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-blue-400">
                  <FaLock className="text-gray-400 ml-3" />
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full p-3 bg-transparent border-none text-white outline-none placeholder-gray-400"
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>
            )}

            {/* Botão de ação */}
            <Button
              type="submit"
              className="w-full p-3 mt-4 bg-gradient-to-r from-zinc-700 to-zinc-700/50 text-white rounded-lg shadow-xl transition-all hover:shadow-gray-600 hover:brightness-120"
              disabled={loading}
            >
              {loading ? "Carregando..." : isRegister ? "Registrar" : "Entrar"}
            </Button>
          </form>
        </motion.div>
                {/* Botão alternar entre Login e Registro */}
                <div className="flex justify-center mb-6 m-10">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="relative bg-gray-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-600"
          >
            {isRegister ? "Já tem uma conta? Faça login" : "Criar uma conta"}
          </button>
        </div>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <Dialog.Panel className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Dialog.Title className="text-lg font-bold text-white">Cadastro realizado!</Dialog.Title>
            <Dialog.Description className="text-gray-400 mt-2">
              Seu registro foi concluído com sucesso.
            </Dialog.Description>
            <Button onClick={() => setIsOpen(false)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg">
              Fechar
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AuthForm;
