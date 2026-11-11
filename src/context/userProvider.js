"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import Cookies from 'js-cookie';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = Cookies.get('token');
        if (token) {
          const sessionData = localStorage.getItem("sessiondata");
          if (!sessionData) {
            // No session data found, clear token and reset state
            setUser(undefined);
            setIsAuthenticated(false);
            Cookies.remove('token');
            return;
          }

          try {
            const base64DecodedData = atob(sessionData);
            // Validate that decoded data is valid JSON
            if (!base64DecodedData || base64DecodedData.trim().length === 0) {
              throw new Error('Decoded session data is empty');
            }
            
            const tempUser = JSON.parse(base64DecodedData);
            
            // Validate that required properties exist
            if (tempUser && tempUser.user) {
              setUser({ ...tempUser['user']});
              setIsAuthenticated(true);
            } else {
              throw new Error('Invalid session data structure');
            }
          } catch (decodeError) {
            // Base64 decode or JSON parse failed
            console.error('Error decoding session data:', decodeError);
            throw decodeError;
          }
        } else {
          setUser(undefined);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(undefined);
        setIsAuthenticated(false);
        // Clear invalid session data
        localStorage.removeItem('sessiondata');
        Cookies.remove('token');
      }
    }
    fetchUser();
  }, []);

  const login = (userData, token,) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(undefined);
    setPermission([]);
    setIsSuperAdmin(false);
    setIsAuthenticated(false);
    localStorage.removeItem('sessiondata');
    Cookies.remove('token');
  };

  const validateToken = () => {
    const token = Cookies.get('token');
    if (!token) {
      logout();
      return false;
    }
    return true;
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      isAuthenticated, 
      setIsAuthenticated, 
      logout,
      validateToken,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;