import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from '../services/auth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
}

export default ProtectedRoute;
