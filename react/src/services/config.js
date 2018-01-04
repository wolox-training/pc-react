import {create} from 'apisauce'

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
})

export default api;
