<template>
    <div class="footer">
        <div class="tit">
            <img src="../../static/img/logo.png" alt="">
            <div class="fright">
                <span><strong>豆瓣</strong>写了日记</span>
                <p>2017-03-01 19:30:41</p>
                <div class="cont">
                    <h4>豆瓣App 4.12.0 主要更新</h4> 
                    <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
                </div>
                <div class="remark ">
                    <div>
                        <span class="icon iconfont icon-dianzan"><i>4</i></span>
                        <span class="icon iconfont icon-pinglun"><i>4</i></span>
                        <span class="icon iconfont icon-zhuanfa" ><i>4</i></span>
                    </div>
                    <span class="icon iconfont icon-icon_more"></span>
                </div>      
            </div>   
        </div>   
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
        border-bottom:1px solid #e8e8e8;
    }
   .tit{
        display:flex;
    }
    img{
        width:.6rem;
        height:.6rem;
        border-radius: 50%;
    }
    .fright{
        padding-left:0.1rem ;
        margin-top:.1rem; 
    }
    .fright strong{
        font-size:.24rem;
    }
    .fright>p{
        font-size:.14rem;  
        margin-top:.05rem; 
    }
    .cont{
        height:1rem;
        margin:0.15rem auto;
        padding:.1rem;
        border:1px solid black;
    }
    .remark{
        display:flex;
        justify-content: space-between;
    }
    .remark>div>span{
        margin-right:.15rem;
    }
    i{
        font-style:normal;
        margin-left:.05rem;
    }

</style>