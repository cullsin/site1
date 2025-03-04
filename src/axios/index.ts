import axios from 'axios';
const https = axios.create({
    baseURL: import.meta.env.REACT_APP_API,
    timeout: 50000
});

export default https;