import axios from 'axios';
import {hostname} from '../hostname/hostname';

export const createChannelAPI = async (data: string) => {
  try {
    const res = await axios({
      method: 'post',
      url: `${hostname}/channel`,
      data: {name:data},
    });

    if (res.data.ok) {
      return res.data;
    } else {
      console.error(res.data.error);
      throw new Error('Erreur lors de la création du canal');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPrivate = async (user1Id, user2Id) => {
   try {
     const res = await axios({
       method: 'post',
       url: `${hostname}/channel/private`,
       data: { user1Id, user2Id },
     });
 
     console.log("res", res.data);
 
     if (res.status === 200) {
       console.log("message", res.data.message);
       return res.data; 
     } else {
       console.error(res.data.error);
       throw new Error('Erreur lors de la création du canal');
     }
   } catch (error) {
     console.error(error);
     throw error;
   }
 };
 

export const getAll = async () => {

  return await axios({
    method: 'get',
    url: `${hostname}/channel`,
  })
    .then(res => {
      return res;
    })
    .catch(e => {
      console.log(e);
    });
};

export const getOneChannel = async (id) => {
  return await axios({
    method: 'get',
    url: `${hostname}/channel/${id}`,
  })
    .then(res => {
      return res;
    })
    .catch(e => {
      console.log(e);
    });
};

export const getPrivateChannels = async (id) => {
  return await axios({
    method: 'get',
    url: `${hostname}/channel/private/${id}`,
  })
    .then(res => {
      console.log('api res private ', res.data);
    
      return res;
    })
    .catch(e => {
      console.log(e);
    });
};

export const deleteChannel = async id => {
  return await axios({
    method: 'delete',
    url: `${hostname}/channel/${id}`,
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(e => {
      console.log(e);
    });
};

export const updateChannel = async (id: number, data: string) => {
  return await axios({
    method: 'put',
    url: `${hostname}/channel/${id}`,
    data: data,
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(e => {
      console.log(e);
    });
};
