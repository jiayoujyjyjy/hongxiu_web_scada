import axios from 'axios'
import * as url from './urlConfig'

export const back = {
  // 测试图片配置接口
  picConfigTest (param) {
    return axios({
      url: `${url.backbasurl}/mock/17/picConfig`,
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      data: {
        id: param.id,
        name: param.name,
        color: param.color
      }
    })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
}
