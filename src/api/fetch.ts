import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { ResponseCodeEnum } from '@/api/enum'
import qs from 'qs'

const AXIOS_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL, // api的base_url,
  timeout: 5000,
  withCredentials: true // cookies 开关
}

axios.defaults.headers.common.Authorization = ''
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

const service: AxiosInstance = axios.create(AXIOS_CONFIG)

// request Interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.method === 'post' && !config.headers.skipQS) {
      config.data = qs.stringify(config.data)
      delete config.headers.skipQS
    }
    config.headers.common['Original-Path'] = encodeURIComponent(document.URL)
    return Promise.resolve(config)
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// response Interceptors
service.interceptors.response.use(
  (response: AxiosResponse): any => {
    if (
      ResponseCodeEnum.SUCCESS === response.data.code ||
      ResponseCodeEnum.SUCCESSDSAMPLE === response.data.code ||
      ResponseCodeEnum.SUCCESS_BASE === response.data.code ||
      ResponseCodeEnum.SUCCESS_CONSUMER === response.data.code ||
      ResponseCodeEnum.SUCCESS_SEND === Number(response.data.code) ||
      (response.status === 200 &&
        response.data.result &&
        parseInt(response.data.result) === 1) ||
      (response.status === 200 && response.data.errorCode == '030100000')
    ) {
      if (response.data.data instanceof Array) {
        // 统一分页结构
        response.data.content = response.data.data
        response.data.totalCount = response.data.total
      }
      return Promise.resolve(response)
    }
    return Promise.reject(response)
  },
  (error: AxiosError) => {
    return Promise.reject(error.response || error)
  }
)

export default service
