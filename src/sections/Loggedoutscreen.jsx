import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedOutScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redirect after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white text-black">
      <p className="text-2xl font-semibold mb-4">You've been logged out.</p>
      <p className="text-sm text-gray-400">Redirecting to login...</p>
    </div>
  );
};

export default LoggedOutScreen;
