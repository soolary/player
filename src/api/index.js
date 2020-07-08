import Vue from 'vue'
import axios from 'axios'
const biu = axios.create({
    baseURL: 'https://autumnfish.cn'
})
Vue.prototype.axios = axios

// 获取
export function getBanner() {
    return biu({
        url: `/banner/?t=${Math.random() * 999}`
    })
}
export function getNewsong() {
    return biu({
        url: `/personalized/newsong/?t=${Math.random() * 999}`
    })
}