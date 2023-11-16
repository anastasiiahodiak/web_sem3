import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://127.0.0.1:3002', 
  FILTER_URL: 'http://127.0.0.1:3002/ships/filter',
});

const BASE_URL= 'http://127.0.0.1:3002';
const FILTER_URL = 'http://127.0.0.1:3002/ships/filter';
const createUrl =({title,type,price,text,imageURL})=>{
    let url ='';
    url += price != ''?`?price=${price}`:'?';
    url+= title !=''?`&title=${title}`:'';
    url+=type!=''?`&type=${type}`:'';
    url+=text!=''?`&text=${text}`:'';
    url+=imageURL!=''?`&imageURL=${imageURL}`:'';
    return url;
  }

export const getShips = () => {
  return apiService.get('/api/ships')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching ships:', error);
      throw error;
    });
};

export const getShipTypes = () => {
  return apiService.get('/api/ship-types')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching ship types:', error);
      throw error;
    });
};

export const getFilteredShips = (filters) => {
  return apiService.get('/api/filtered-ships', { params: filters })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching filtered ships:', error);
      throw error;
    });
};

export default apiService;
