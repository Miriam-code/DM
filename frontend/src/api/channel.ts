import axios from 'axios';
import { hostname } from '../hostname/hostname';

export const createChannelAPI = async (name:string) => {
   try {
     const response = await axios.post(`${hostname}/channel`, { name });
     return response.data
   } catch (error) {
     console.error('Error creating channel:', error);
     console.info(error)
     throw error;
   }
 };

export const getAll = async () => {

    return await axios({
       method: 'get',
       url: `${hostname}/channel`,
    })
    .then((res) => {
        console.log(res.data)
        return res.data.channels 
    })
    .catch((e) => {
       console.log(e);
    })
}

export const getOneChannel = async (id:any) => {

    return await axios({
       method: 'get',
       url: `${hostname}/channel/${id}`,
    })
    .then((res) => {
        console.log(res.data)
       return res.data.channel
    })
    .catch((e) => {
       console.log(e);
    })
}

export const deleteChannel = async (id:any) => {

    return await axios({
       method: 'delete',
       url: `${hostname}/channel/${id}`,
    })
    .then((res) => {
        console.log(res.data)
       return res.data
    })
    .catch((e) => {
       console.log(e);
    })
}

export const updateChannel = async (id:any , data:string) => {

    return await axios({
       method: 'put',
       url: `${hostname}/channel/${id}`,
       data:data
    })
    .then((res) => {
        console.log(res.data)
       return res.data
    })
    .catch((e) => {
       console.log(e);
    })
}