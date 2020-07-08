<template>
    <el-container id="#app">
        <el-header class="title">黑马音乐</el-header>
        <el-container>
            <el-aside width="200px" class="aside">
                <el-menu :default-active="$route.path" class="menu" router>
                    <el-menu-item index="/">
                        <i class="el-icon-search"></i>
                        <span slot="title">发现音乐</span>
                    </el-menu-item>
                    <el-menu-item index="/music">
                        <i class="el-icon-service"></i>
                        <span slot="title">最新音乐</span>
                    </el-menu-item>
                    <el-menu-item index="/mv">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">最新MV</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: 0;
    list-style: none;
}
body,
html,
#app {
    height: 100%;
    /* width: 100%; */
}
body .el-header {
    background-color: #b3c0d1;
    height: 50px;
    text-align: center;
    line-height: 50px;
}

.aside {
    background-color: #ededed;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    height: 100%;
    width: 100%;
}

body > .el-container {
    margin-bottom: 40px;
    width: 100%;
}
</style>
