import axios from 'axios';
import env from 'react-dotenv'
import { hostname } from '../hostname/hostname';

export const createChannelAPI = async (data:string) => {

   return await axios({
      method: 'post',
      url: `${hostname}/channel`,
      data: { name: data }
   })
   .then((res) => {
      if (res.status === 200) {
        return res.data
      }
   })
   .catch((error) => {
      console.log(error);
      throw error;
   })
}

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

export const getOneChannel = async (id:number) => {

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

export const deleteChannel = async (id) => {

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

export const updateChannel = async (id:number , data:string) => {

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