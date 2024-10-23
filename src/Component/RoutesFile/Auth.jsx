// src/hooks/useAuth.js

import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Logic to check if user is authenticated, e.g., check localStorage or cookies for token
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};
