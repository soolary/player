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

export function searchMusic(params) {
    return biu({
        url: `/search?t=${Math.random() * 999}`,
        params
    })
}
export function getMv(params) {
    return biu({
        url: `/mv/all?t=${Math.random() * 999}`,
        params
    })
}
export function playMv(params) {
    return biu({
        url: `/mv/url?t=${Math.random() * 999}`,
        params
    })
}
export function mvInfo(params) {
    return biu({
        url: `/mv/detail?t=${Math.random() * 999}`,
        params
    })
}

