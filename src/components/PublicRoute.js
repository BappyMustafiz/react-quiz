import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PublicRoute({ element }) {
  const { currentUser } = useAuth();
  return !currentUser ? element : <Navigate to='/' />;
}

export default PublicRoute;
