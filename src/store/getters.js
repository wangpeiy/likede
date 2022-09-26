const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.userInfo.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
