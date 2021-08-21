const axios = require('axios')

class DataSource {
  static searchVerse (keyword) {
    return axios.get(`https://api.alquran.cloud/v1/search/${keyword}/all/id.indonesian`)
  }
}

export default DataSource
