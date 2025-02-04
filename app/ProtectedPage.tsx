import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Você precisa fazer login.</div>;
  }

  return <div>Conteúdo protegido para usuários autenticados.</div>;
};

export default ProtectedPage;
