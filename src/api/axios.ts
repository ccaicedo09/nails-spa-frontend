import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    withCredentials: true 
})
//Console de las credenciales:
console.log("Axios instance created with baseURL:", instance.defaults.baseURL);
console.log("Axios instance withCredentials:", instance.defaults.withCredentials);
export default instance