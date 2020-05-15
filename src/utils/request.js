import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
  baseURL: '/v2/movie',
  timeout: 5000,
});

// request interceptor
// service.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     // do something with request error
//     console.log(error); // for debug
//     return Promise.reject(error);
//   },
// );

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      Message({
        message: response.statusText || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(response.statusText || 'Error'));
    }
    return response.data;
  },
  (error) => {
    console.log(`error: ${error}`); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
