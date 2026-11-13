"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import Cookies from 'js-cookie';

function getStoredSession() {
  const sessionData = localStorage.getItem("sessiondata");
  return sessionData ? JSON.parse(atob(sessionData)) : null;
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const sessionData = getStoredSession();
        if (sessionData?.token && sessionData.user) {
          setUser({
            email: sessionData.user,
            name: sessionData.name,
            role: sessionData.role,
          });
          setIsAuthenticated(true);
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

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(undefined);
    setIsAuthenticated(false);
    localStorage.removeItem('sessiondata');
    Cookies.remove('token');
  };

  const validateToken = () => {
    try {
      if (getStoredSession()?.token) return true;
      logout();
      return false;
    } catch (error) {
      console.error("Error reading stored session:", error);
      logout();
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      isAuthenticated, 
      setIsAuthenticated, 
      login,
      logout,
      validateToken,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;