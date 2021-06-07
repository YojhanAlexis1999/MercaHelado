import axios from 'axios'

const ClienteAxios = axios.create({
    baseURL : "https://servidor-telecomunicaciones.herokuapp.com/",
    headers:{ 
        'Content-Type': 'application/json'
    }

})
export default ClienteAxios