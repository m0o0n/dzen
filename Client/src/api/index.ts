import axios from "axios"

const $HostInstace = axios.create({ baseURL: 'http://localhost:5000/api/' })


export default $HostInstace