//app.js
import { getLoginCode, getUserMessage } from './utils/api.js'
App({
  onLaunch : function () {
    this.getUserInfo()
    console.log('App onLaunch')
  },

  onShow : function () {
    console.log('App onShow')
  },

  onHide() {
    console.log('App onHide')
  },

  onError(err) {
    console.log(err)
  },

  getUserInfo(){
    getUserMessage().then(data => {
      console.log(data)
    })
  },

  globalData : {
      userInfo : null
  }

})