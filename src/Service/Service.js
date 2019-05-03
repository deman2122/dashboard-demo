import axios from 'axios';

const headers = {
  'Content-Type': 'application/json'
};
class loadAPIService {
  getIncidentsData = () => {
    return axios.get('./data.json', { headers });
  };
}

export default new loadAPIService();
