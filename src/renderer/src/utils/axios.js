import axios from 'axios'
const Axios =  axios.create({
  baseURL: 'http://localhost:8090'
})
export {Axios}