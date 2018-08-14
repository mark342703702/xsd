//获取用户登录凭证
export const getLoginCode = () =>{
  return new Promise((resolve, reject) => {
      wx.login({
        timeout : 6000,
        fail : (err) => {
          return reject(err)
        },
        success: (res) => {
          if(res.code){
            return resolve(res.code)
          }
        }
      })
  })
}

//获取用户信息
export const getUserMessage = () =>{
  return new Promise((resolve, reject) => {
      wx.getSetting({
        success:(res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success : (user) => {
                resolve(user)
              }
            })
          }
        }
      })
  })
}

//检查用户是否登陆,已登陆返回true,未登录返回false
export const checkLogin = () =>{
  return new Promise((resolve, reject) => {
      if(!wx.getStorageSync('token')){
        return reject({ isLog : false})
      }else{
        wx.checkSession({
          success : function(){
            return resolve({ isLog : true})
          },
          fail : function(){
            return reject({ isLog: false })
          }
        })
      }
  })
}