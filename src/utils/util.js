// 工具函数，以下只介绍get请求，post传入data即可。
import config from './config'

export function get (url) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            success: function (res) {
                if (res.data.code === 0) {
                resolve(res.data.data)
                } else {
                reject(res.data)
                }
            }
        })
    })
}