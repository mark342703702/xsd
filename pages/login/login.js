// pages/login/login.js
import { getLoginCode, checkLogin } from '../../utils/api';
import { http } from '../../utils/util.js';
import Notify from '../../dist/notify/index';

Page({
  data: {
    logged : false,
    loading : false
  },

  onShow: function () {
    checkLogin().then(() => { 
        this.setData({
          logged : true
        }, () => { setTimeout(this.goIndex, 1000) })
    })
  },

  login : function(){
    getLoginCode().then( code => {
      http('http://localhost:3000/wx/login', { code : code}, 'POST').then(res =>{
        Notify({ text: '登陆成功', backgroundColor: '#38f' })
        console.log(res)
        wx.setStorageSync('token', res.token)
      }).catch(() => { Notify({ text: '登陆失败', backgroundColor: '#e64340' }) })
    }).catch(() => { Notify({ text: '获取登陆凭证失败', backgroundColor: '#e64340'})})
  },

  goIndex : function(){
    wx.switchTab({ url: '/pages/index/index' })
  }

})
