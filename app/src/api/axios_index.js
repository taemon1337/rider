import axios from 'axios'
import path from 'path'

const ax = axios.create({
  baseURL: process.env.API || 'http://localhost:8080/api/',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const Api = {
  findAll (resource, opts) {
    return ax.get(resource).then(function (resp) {
      return resp._items
    })
  },
  find (resource, id, opts) {
    return ax.get(path.join(resource, id))
  },
  save (resource, id, record, opts) {
    var meth = id ? 'put' : 'post'
    var url = id ? path.join(resource, id) : resource
    return ax[meth](url, record, opts).then(function (resp) {
      for (var key in resp) { record[key] = resp[key] || record[key] }
      return record
    })
  }
}

export default Api

