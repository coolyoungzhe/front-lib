<template>
    <el-container class="app-container">
        <el-aside>
                <Menu></Menu>
            </el-aside>
        <el-container>
        <el-header>

        </el-header>
            
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>

    </el-container>
</template>
<script setup lang="ts">
import Main from './main.vue'
import Menu from './menu.vue'
</script>
<style lang="scss" scoped>
.app-container{
    width: 100vw;
    height: 100vh;
}
</style>