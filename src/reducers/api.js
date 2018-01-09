import axios from 'axios';

/**
 * Get photos data
 * @return { Array }
 */
const getPhotos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function (response) {
    const data = response.data;
    
    return data;
  });
}

export default { getPhotos };
