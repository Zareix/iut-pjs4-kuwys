import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.1.103:5000/pjs4-iut-ts/europe-west1/api',
})
