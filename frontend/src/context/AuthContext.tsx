import React, { useState, createContext, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfo } from '../api/auth';

interface User {
  pseudo: string;
  email: string;
  profileImage?: string;
  firstName: string;
  lastName: string;
  sexe: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

interface UserContextValue {
  isLoggedIn: boolean;
  user: User | null;
  logout: () => Promise<void>;
  saveUser: () => Promise<void>;
}

const UserContext = createContext<UserContextValue | null>(null);

const UserProvider: React.FC<{}> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const saveUser = async (): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem('token');
      const data = await getUserInfo(token);
      setUser(data);
      setIsLoggedIn(true);
      console.log('Connexion réussie !');
    } catch (e) {
      console.log('Erreur lors de la récupération des infos utilisateur :', e);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
      setUser(null);
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Erreur lors de la déconnexion de l'utilisateur :", error);
      throw error;
    }
  };

  // Mémorisez la valeur du contexte pour éviter les rendus inutiles
  const value: UserContextValue = useMemo(() => ({ isLoggedIn, user, logout, saveUser }), [isLoggedIn, user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
