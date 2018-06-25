//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls : [
      { 'pic': '../../img/ad1.jpg', 'link': '../../pages/contact/contact'},
      { 'pic': '../../img/ad2.jpg', 'link': '../../pages/contact/contact'},
      { 'pic': '../../img/ad3.jpg', 'link': '../../pages/contact/contact' }
    ],
    autoplay: true,
    interval: 5000,
    duration: 500,
    newsUrls : [
      { 'pic': '../../img/pro1.jpg'},
      { 'pic': '../../img/pro2.jpg' },
      { 'pic': '../../img/pro3.jpg' },
      { 'pic': '../../img/pro4.jpg' },
      { 'pic': '../../img/pro5.jpg' },
      { 'pic': '../../img/pro6.jpg' }
    ],
    sumUrls: [
      { 'pic': '../../img/sum1.jpg' },
      { 'pic': '../../img/sum2.jpg' },
      { 'pic': '../../img/sum3.jpg' },
      { 'pic': '../../img/sum4.jpg' },
      { 'pic': '../../img/sum5.jpg' }
    ]
  },
})