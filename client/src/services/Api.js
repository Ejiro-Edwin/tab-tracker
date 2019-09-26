const axios = require('axios')
export default () => {
  return axios.create({
    baseUrl: `http://localhost:8081/`
  })
}
