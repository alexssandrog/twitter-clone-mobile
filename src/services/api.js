import axios from 'axios';

//Desenvolvimento
//iOS pode usar localhost
//Android via Studio usar 10.0.2.2
//Android via Genymotion usar 10.0.3.2
const api = axios.create({
    baseURL: 'http://10.0.3.2:3000'
});

export default api;