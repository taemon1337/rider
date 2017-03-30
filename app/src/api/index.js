import axios from 'axios'
import path from 'path'

const base = process.env.API || "http://localhost:8080/api"

const Api = {
  findAll (resource, opts) {
    return axios.get(path.join(base, resource)).then(function (resp) {
      return resp._items
    })
  }
}

export default Api

