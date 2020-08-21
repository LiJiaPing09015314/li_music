import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
// import store from '@/store'
// import { getToken, clearToken } from '@/libs/utils'
// import { toast } from '@/assets/js/toast'
// import { Spin } from 'iview'//界面加载进度条
// const addErrorLog = errorInfo => {
//   const { statusText, status, request: { responseURL } } = errorInfo
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   }
//   if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
// }
let _vue = new Vue()
let flag = false
// let loadinginstace = _vue.$createToast({
//     time: 0,
//     txt: '加载中',
//     mask: true
// })
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            withCredentials: true, // 跨域请求时发送 cookies
            // crossDomain: true,
            timeout: 60000, // request timeout 2分钟
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'token': getToken()
            }
        }
        return config
    }
    interceptors(instance, url) {
        let _vue = new Vue()
        // let loadinginstace = _vue.$createToast({
        //     time: 0,
        //     txt: '加载中',
        //     mask: true
        // })
        // let VueSticky = _vue.$createVueSticky({
        //         $props: {
        //             name: '系统更新中'
        //         }
        //     })
            // 请求拦截
        instance.interceptors.request.use(config => {
                // 添加全局的loading...
                // loadinginstace.show()
                return config
            }, error => {
                // loadinginstace.hide()
                return Promise.reject(error)
            })
            // 响应拦截
        instance.interceptors.response.use(response => {
                // loadinginstace.hide()
                // VueSticky.hide()
                if (response.status == 200) {
                    return response.data
                } else {
                    console.log('返回错误！')
                    errorHandle(response.data.result, response.data.message)
                    return Promise.reject(response)
                }
            },
            error => {
                // loadinginstace.hide()
                if (error.response.status == 502) {
                    if (!flag) {
                        // VueSticky.show()
                        flag = true
                    }
                    // toast.toastWarn('系统更新中······')
                    // location.replace('http://test.huayeee.com/cust')
                } else {
                    // toast.toastWarn('系统错误')
                }
                console.log(error.response.status, 'cuow3')
                    // addErrorLog(error.response)//保存错误日志
                return Promise.reject(error)
            })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, message) => {
    console.log(status, 'statuscuowu')
        // 状态码判断
    switch (status) {
        // 未登录或者登录已失效，请重新登录！
        case 401:
            // clearToken()
            // toast.toastWarn('请重新登录')
            router.replace({
                path: '/author',
                query: {}
            })

            // _vue.$router.push('/author')
            break
            // 404请求不存在
        case 404:
            // toast.toastWarn('系统错误')
            break
            // 500服务器内部错误
        case 502:
            // toast.toastWarn('系统更新中······')
            break
        case 1001:
            // toast.toastWarn(`${message}`)
            break
        default:
            // toast.toastWarn('发生一个错误')
    }
}

export default HttpRequest