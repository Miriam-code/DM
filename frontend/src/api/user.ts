import axios from 'axios';
import { hostname } from '../hostname/hostname';

export const getAllUsers = async (token: string): Promise<any[]> => {
  try {
    const response = await axios.get(`${hostname}/allusers`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }); 
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de tous les utilisateurs :", error);
    throw new Error("Erreur lors de la récupération de tous les utilisateurs");
  }
};
