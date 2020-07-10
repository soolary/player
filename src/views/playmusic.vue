<template>
    <div class="playmusic" v-if="info !=''">
        <h3 class="name">{{info.al.name}}</h3>
        <p class="avatar">演唱者：{{info.ar|arr}}</p>
        <img :src="info.al.picUrl" alt="">
        <audio :src="musicUrl" controls autoplay></audio>
    </div>
</template>

<script>
// import axios from "axios";
import { songInfo, playMusic } from "../api/index";
export default {
    data() {
        return {
            info: "",
            musicUrl: ""
        };
    },
    created() {
        this.playMusic();
    },
    filters: {
        arr(item) {
            return item
                .map(item2 => {
                    return item2.name;
                })
                .join("&");
        }
    },
    methods: {
        playMusic() {
            let id = this.$route.query.id;
            if (id) {
                playMusic({ id: id }).then(res => {
                    this.musicUrl = res.data.data[0].url;
                });
                songInfo({ ids: id }).then(res => {
                    this.info = res.data.songs[0];
                });
            }
        }
    }
};
</script>

<style scoped>
.playmusic {
    text-align: center;
    width: 700px;
    margin: 0 auto;
}
.name {
    margin-bottom: 20px;
}
.avatar {
    margin-bottom: 30px;
}

img {
    width: 600px;
}
audio {
    width: 100%;
}
</style>