import { useNavigate } from 'react-router-dom';
import { signOut } from '../firebase';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      alert("Logged out successfully!");
      navigate('/login'); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
