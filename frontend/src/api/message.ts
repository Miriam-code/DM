import axios from 'axios';
import {hostname} from '../hostname/hostname';


export const getAllMessages = async (channelId: string) => {

    try {
      const response = await axios.get(`${hostname}/message/${channelId}`);
  
      if (response.data) {
        return response.data;
      } else {
        console.error(response.data.error);
        throw new Error('Erreur lors de la récupération des messages de la chaîne');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
 };