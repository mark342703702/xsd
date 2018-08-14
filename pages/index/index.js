//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls : [
      { 'pic': 'http://localhost:3000/wx/images/ad2.jpg', 'link': '../../pages/contact/contact'},
      { 'pic': 'http://localhost:3000/wx/images/ad3.jpg', 'link': '../../pages/contact/contact' }
    ],
    newsUrls : [
      { 'pic': '../../img/pro1.jpg'},
      { 'pic': '../../img/pro2.jpg' },
      { 'pic': '../../img/pro3.jpg' },
      { 'pic': '../../img/pro4.jpg' },
      { 'pic': '../../img/pro5.jpg' }
    ],
    sumUrls: [
      { 'pic': '../../img/pro3.jpg' },
      { 'pic': '../../img/sum2.jpg' },
      { 'pic': '../../img/sum3.jpg' },
      { 'pic': '../../img/sum4.jpg' },
      { 'pic': '../../img/pro4.jpg' }
    ]
  },
})
