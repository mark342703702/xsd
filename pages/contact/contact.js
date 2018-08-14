// pages/contact/contact.js
Page({

  data: {
    urls: [
      'http://dimg05.c-ctrip.com/images/fd/tg/g2/M00/A2/17/Cghzf1S1ViKAH5kqAACkplaLOWk177_C_300_300_Q80.jpg', 
      'http://img.360500.com/2014/36/55744/small/1403060913133296.jpg', 
      'http://www.glosspp.com/uploads/allimg/1604/1459855417_1917813613.jpg'
      ]
  },

  phoneCall : function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone
    })
  },

  getLocation : function(e){
    wx.openLocation({
      latitude : 31.457650,
      longitude: 104.711610,
      name : '小时代',
      address: '涪城区花园批发市场B区二楼4号'
    })
  },

  getInfo : function(e){
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.urls
    })
  }
})