<template>
    <table class="table">
        <tr>
            <th class="th1">音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index" @click="musicClick(item.id,item.name)">
            <td class="td1">
                <div class="num">{{index+1}}</div>
                <img v-if="item.picUrl" :src="item.picUrl" alt="">
                <div>{{item.name}}</div>
            </td>
            <td>{{item.song.artists[0].name}}</td>
            <td>{{item.song.album.name}}</td>
            <td>{{item.song.duration|formaTime}}</td>
        </tr>
    </table>
</template>

<script>
import moment from "moment";
export default {
    props: ["list", "type"],
    filters: {
        formaTime(time) {
            return moment(time).format("mm:ss");
        }
    },
    methods: {
        musicClick(id) {
            if (this.type == "mv") {
                this.$router.push("/playmv?mvid=" + id);
            } else {
                this.$router.push("/playmusic?musicid=" + id);
            }
        }
    }
};
</script>

<style>
.table {
    padding: 20px 15px;
    width: 100%;
}
.table th {
    text-align: left;
}
.table .th1 {
    padding-left: 140px;
}
.table .td1 {
    display: flex;
    align-items: center;
}
.table .td1 .num {
    width: 30px;
    margin-right: 20px;
}
.table .td1 img {
    width: 70px;
    margin-right: 20px;
}
</style>