import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfo } from '../api/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const data = await getUserInfo(token);
          setUser(data);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de la connexion de l\'utilisateur :', error);
      }
    };

    checkUserLogin();
  }, []);

  const saveUser = async (authToken) => {
    try {
      await AsyncStorage.setItem('userToken', authToken);
      const data = await getUserInfo(authToken);
      setUser(data);
      setIsLoggedIn(true);
      
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'utilisateur :', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Erreur lors de la déconnexion de l\'utilisateur :', error);
    }
  };

  const authContextValue = {
    isLoggedIn,
    user,
    saveUser,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
