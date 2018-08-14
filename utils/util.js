const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//封装请求promise 默认GET方式
const http = (url, data = {}, method = 'GET') =>{
  wx.showNavigationBarLoading()
    return new Promise((resove, reject) => {
      wx.request({
        url : url,
        data: data,
        method: method.toUpperCase(),
        success : (res) => {
          wx.hideNavigationBarLoading()
          return resove(res.data)
        },
        fail : (err) =>{
          wx.hideNavigationBarLoading()
          return reject(err)
        }
      })
    })
}

module.exports = {
  formatTime: formatTime,
  http : http
}
