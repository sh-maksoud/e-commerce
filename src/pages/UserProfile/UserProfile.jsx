
import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const UserProfile = () => {
  const { currentUser, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      alert("Logged out successfully!");
      window.location.href = "/login"; 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default UserProfile;
