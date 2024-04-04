import axios from 'axios';
import env from 'react-dotenv';
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

export const getAll = async () => {
  return await axios({
    method: 'get',
    url: `${hostname}/channel`,
  })
    .then(res => {
      console.log(res.data);
      return res.data.channels;
    })
    .catch(e => {
      console.log(e);
    });
};

export const getOneChannel = async (id: number) => {
  return await axios({
    method: 'get',
    url: `${hostname}/channel/${id}`,
  })
    .then(res => {
      console.log(res.data);
      return res.data.channel;
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
