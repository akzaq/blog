import axios from 'axios'
import { formatDate } from '@/assets/js/tools/formatDate'

export function request() {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api/article',
    timeout: 5000,
  })
  //添加拦截器，对响应数据的时间由时间戳转化为'YYYY-MM-DD hh:mm:ss'格式
  instance.interceptors.response.use((response) => {
    // 判读数据是不是数组,有可能返回的只是一段信息
    if (Array.isArray(response.data)) {
      response.data = response.data.map((item) => {
        item.date = formatDate(item.date)
        return item
      })
    }
    return response
  })
  return instance
}
