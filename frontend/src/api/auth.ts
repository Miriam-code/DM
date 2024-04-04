import axios from 'axios';
import { hostname } from '../hostname/hostname';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserInfo = async (token:any) => {

  try {
      const response = await axios.get(`${hostname}/users`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des informations de l'utilisateur :", error);
      throw error;
    }
}; 

export const login = async (email: string, password: string): Promise<string | undefined> => {
  try {
    const response = await axios.post(`${hostname}/login`, {
      email,
      password,
    });

    const authtoken = response.data.authtoken;
    console.log(authtoken);
    
    if (authtoken) {
      await AsyncStorage.setItem('token', authtoken);
      return authtoken;
    }
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      console.log(error.response.data.error);
    } else {
      console.log('Une erreur s\'est produite lors de la connexion:', error.message);
    }
  }
};

