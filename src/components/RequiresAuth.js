import { useAuth } from '../context/auth-context';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequiresAuth({ children }) {
  let location = useLocation();
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
