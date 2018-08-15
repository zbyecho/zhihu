import Axios from 'axios'
// axios 基础配置
Axios.defaults.baseURL = '/api';
Axios.defaults.timeout = 6000;
Axios.defaults.withCredentials = true;

/*
*  $get
*  $post
* */

export function GET(url, params= { }) {
  return new Promise((resolve, reject ) => {
    Axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}

export  function POST(url, data = { }) {
  return new Promise((resolve, reject) => {
    Axios.post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })

}
