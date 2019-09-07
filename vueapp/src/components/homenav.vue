<template>
    <div class="header">
        <router-link to="/movie">影院热映</router-link>
        <router-link to="/radio">欧美新碟榜</router-link>
        <router-link to="/reg">注册帐号</router-link>
        <router-link to="/login">登录豆瓣</router-link> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        width: 100%;  
        padding:.2rem;
        display:flex;
        flex-wrap:wrap;
    }
    .header a{
        display:block;
        width:48%;
        height:.53rem;
        line-height:.53rem;
        margin:1%;
        background:#f6f6f6;
        text-align:center;
        border-radius:.05rem;
        box-sizing: border-box;
        color:black;
    }
    
</style>