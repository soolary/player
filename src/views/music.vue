<template>
    <div class="newMusic">
        <div class="top">
            <input type="text" v-model="inputValue" placeholder="输入歌曲" @keyup.enter="search" />
        </div>
        <tablelist :list="musicList"></tablelist>
    </div>
</template>
<script>
import tablelist from "../components/table";
import { getNewsong, searchMusic } from "../api/index";
export default {
    components: {
        tablelist
    },
    data() {
        return {
            inputValue: "",
            musicList: []
        };
    },
    created() {
        getNewsong().then(res => {
            this.musicList = res.data.result;
        });
    },
    methods: {
        search() {
            searchMusic({ keywords: this.inputValue }).then(res => {
                res.data.result.songs.forEach(item => {
                    item.song = {
                        artists: item.artists,
                        duration: item.duration,
                        album: { name: item.name }
                    };
                });
                this.musicList = res.data.result.songs;
            });
        }
    }
};
</script>

<style>
.newMusic .top {
    text-align: center;
}
.newMusic .top input {
    width: 300px;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #ccc;
}
</style>
