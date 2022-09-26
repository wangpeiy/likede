import request from '@/utils/request'

// export const uploadPicturesAPI = () => {
//   return request({
//     url: '/vm-service/sku/fileUpload',
//     method: 'POST',
//     data: {
//       fileName:
//     }
//   })
// }

/**
 * @ 图片验证码
 * @param {Number} clientToken 请求随机数
 * @returns String 验证码图片流
 */
export const imageCodeAPI = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}

/**
 * @ 用户登录API
 * @param {Object} data
 * @returns Promise
 */
export const loginAPI = (data) => {
  return request({
    url: `/user-service/user/login`,
    method: 'POST',
    data
  })
}

