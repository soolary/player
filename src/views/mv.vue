<template>
    <div class="newMv">
        <div class="top">
            <input type="text" v-model="inputValue" placeholder="输入歌曲" @keyup.enter="search" />
        </div>
        <div class="mv" v-if="mvUrl">
            <video :src="mvUrl" controls autoplay></video>
        </div>
        <tablelist :list="musicList" type="mv"></tablelist>
    </div>
</template>

<script>
import { getMv, searchMusic } from "../api/index";
import tablelist from "../components/table";
export default {
    components: {
        tablelist
    },
    data() {
        return {
            mvUrl: "",
            musicList: [],
            inputValue: ""
        };
    },
    created() {
        getMv().then(res => {
            // console.log(res);

            res.data.data.forEach(item => {
                item.picUrl = item.cover;
                item.song = {
                    artists: item.artists,
                    duration: item.duration,
                    album: {
                        name: item.name
                    }
                };
            });
            this.musicList = res.data.data;
        });
    },
    methods: {
        search() {
            searchMusic({ keywords: this.inputValue, type: 1004 }).then(res => {
                res.data.result.mvs.forEach(item => {
                    item.picUrl = item.cover;
                    item.song = {
                        artists: item.artists,
                        duration: item.duration,
                        album: {
                            name: item.name
                        }
                    };
                });
                this.musicList = res.data.result.mvs;
            });
        }
    }
};
</script>

<style>
.newMv .top {
    text-align: center;
}
.newMv .top input {
    width: 300px;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #ccc;
}
.newMv .mv {
    text-align: center;
}
.newMv .mv video {
    width: 600px;
}
</style>
