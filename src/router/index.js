
import VueRouter from 'vue-router'
import Vue from 'vue'
import found from '../views/found.vue'
import music from '../views/music'
import mv from '../views/mv.vue'
import playmv from '../views/playmv.vue'
import playmusic from '../views/playmusic.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
        path: '/',
        alias: '/found',
        component: found
    }, {
        path: '/music',
        component: music
    }, {
        path: '/mv',
        component: mv
    }, {
        path: '/playmv',
        component: playmv
    }, {
        path: '/playmusic',
        component: playmusic
    }]

})
export default router