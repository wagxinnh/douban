<template>
    <div class="footer">
        <div>
            <img src="../../static/img/logo.png" alt="">
            <div class="fright">
                <strong>豆瓣</strong>
                <p>我们的精神角落</p>
            </div>   
        </div> 
        <p class="goload">去 App Store 免费下载 iOS 客户端</p>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer{
        width:100%;
        padding:0.2rem;
    }
    .footer>div{
        display:flex;
        justify-content:center;
    }
    img{
        width:.6rem;
        height:.6rem;
    }
    .fright{
        padding:.0 0.2rem ;
    }
    .fright strong{
        display:block;
        font-size:.24rem;
        margin-top:.1rem;
        margin-bottom:0.1rem; 

    }
    .fright>p{
        font-size:.14rem;  
    }
    .goload{
        text-align:center; 
        margin-top:.1rem; 
        color: #42bd56;
    }

</style>