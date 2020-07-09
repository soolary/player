
<template>
    <div class="playmv" v-if="info!==''">
        <h3>{{info.name}}</h3>
        <p>演唱者：{{info.artists|filterAr}}</p>
        <video :src="mvUrl" controls autoplay></video>
    </div>
</template>

<script>
import { playMv, mvInfo } from "../api/index";
export default {
    data() {
        return {
            mvUrl: "",
            info: ""
        };
    },
    filters: {
        filterAr(arr) {
            return arr
                .map(item => {
                    return item.name;
                })
                .join("&");
        }
    },
    created() {
        this.playVideo();
    },
    methods: {
        playVideo() {
            let id = this.$route.query.mvid;
            if (id) {
                playMv({ id: id }).then(res => {
                    this.mvUrl = res.data.data.url;
                });
                mvInfo({ mvid: id }).then(res => {
                    this.info = res.data.data;
                });
            }
        }
    }
};
</script>

<style>
.playmv {
    text-align: center;
}
.playmv video {
    width: 800px;
    height: 500px;
}
</style>