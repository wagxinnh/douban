<template>
    <div class="nav">
            <router-link to="/home">豆瓣</router-link>
            <div>
                <router-link class="color1" to="/movie">电影</router-link>
                <router-link class="color2" to="/book">图书</router-link>
                <router-link class="color3" to="/radio">广播</router-link>
                <router-link class="color4" to="/team">小组</router-link>
                <router-link to="/nav"><img src="../../static/img/nav.png"></router-link>
            </div>     
    </div>  
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav{
        width: 100%;
        height:.58rem;
        border-bottom:1px solid #f3f3f3;
        display: flex;
        justify-content: space-between;
    }
    .nav>a{
        font-size: 0.28rem;
        color:#05b512;
        line-height:.58rem;
        margin-left:.22rem;
        font-weight: bold;
    }
    .nav div{
        display: flex;
    }
    .nav div a{
        font-size: 0.16rem;
        margin-left:.15rem;
        line-height:.58rem;
    }
    .nav img{
        width:.28rem;
        height:.22rem;
        vertical-align: middle;
        margin-right:.22rem;
    }
    .color1{
    color:#2384e8;
    }
    .color2{
    color:#7a6adb;
    }

    .color3{
    color:#dba260;
    }

    .color4{
    color:#e6467e;
    }
</style>