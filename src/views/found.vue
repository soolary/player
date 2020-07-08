<template>
    <div class="found">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in banners" :key="index">
                <img class="top-img" :src="item.imageUrl" alt="">
            </el-carousel-item>
        </el-carousel>
        <h3>推荐音乐</h3>
        <tableList :list="list"></tableList>
    </div>
</template>

<script>
import { getBanner, getNewsong } from "../api/index";
import tableList from "../components/table";
export default {
    components: {
        tableList
    },
    data() {
        return {
            banners: [],
            list: []
        };
    },
    created() {
        getBanner().then(res => {
            this.banners = res.data.banners;
        });
        getNewsong().then(res => {
            this.list = res.data.result;
        });
    }
};
</script>
<style>
.found .top-img {
    width: 100%;
}
</style>