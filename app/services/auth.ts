import api from './axios';

export async function login(email: string, password: string) {
  try {
    // Realiza a requisição para login
    const response = await api.post('/auth/login', { email, password });

    // Armazena o token no localStorage, se a resposta for bem-sucedida
    localStorage.setItem('token', response.data.access_token);
    
    // Retorna os dados de sucesso
    return response.data;
  } catch (error: any) {
    // Tratamento de erro caso a API retorne um erro
    throw new Error(error.response?.data?.error || 'Erro ao fazer login');
  }
}

export function logout() {
  // Remove o token ao fazer logout
  localStorage.removeItem('token');
}

export function getToken() {
  // Retorna o token armazenado no localStorage, ou null se não existir
  return localStorage.getItem('token');
}
