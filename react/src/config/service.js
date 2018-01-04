import {create} from 'apisauce'

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  timeout: 5000
})

export default api;
