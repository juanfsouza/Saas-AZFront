"use client";

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { login } from '../services/auth';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.email, data.password);
      router.push('/');
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            {...register('email')}
            type="email"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            {...register('password')}
            type="password"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
