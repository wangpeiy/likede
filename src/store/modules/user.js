import { loginAPI } from '@/api'
import { Message } from 'element-ui'
const state = {
  userInfo: {}
}

const mutations = {
  // 将用户个人信息存入 userInfo
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  // 登出删除用户信息
  REMOVE_USERINFO(state) {
    state.userInfo = {}
  }
}

const actions = {
  async getUserInfo({ commit }, loginForm) {
    try {
      const { data } = await loginAPI(loginForm)
      console.log(data)
      commit('SET_USERINFO', data)
      if (data.msg === '登录成功') {
        Message({
          message: data.msg,
          type: 'success'
        })
      } else {
        Message.error(data.msg)
      }
    } catch (error) {
      Message.error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

