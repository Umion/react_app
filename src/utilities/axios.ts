import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const baseURL = 'https://dummyjson.com' // move to ENV

export const defHttp = axios.create({ baseURL })

defHttp.defaults.headers.common = {
  Accept: 'application/json'
}

const requestHandler = async (config: InternalAxiosRequestConfig<any>) => {
  // check token
  // set token to headers
  return config
}

const responseHandler = (response: AxiosResponse<any, any>) => {
  return response
}

const errorHandler = async (error: any) => {
  // if error, remove session
  // redirect to login

  return Promise.reject(error)
}

defHttp.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
)

defHttp.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
)

export default defHttp
