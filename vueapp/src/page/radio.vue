<template>
    <div>
        <routernav></routernav>
        <div class="section">
            <span>打开App, 浏览更多</span>
            <div>
                <a href="#">极速下载</a>
                <a href="#">打开</a>   
            </div>
        </div>
        <logintip></logintip>
        <radlist></radlist>
        <radlist></radlist>
        <radlist></radlist>
        <radlist></radlist>
        <titles :tit="text"></titles>
        <footers></footers>
    </div>
</template>
<script>
import routernav from '../components/routernav'
import logintip from '../components/logintip'
import radlist from '../components/radlist'
import titles from '../components/titles'
import footers from '../components/footer'
export default {
    components:{
        routernav,
        logintip,
        radlist,
        titles,
        footers
    },
    data(){
        return{
            text:"显示更多广播"
        }
    }
}
</script>
<style scoped>  
.section{
    width:100%;
    height:1rem;
    background: url(../../static/img/promotion_bg.b7abee9.jpg) no-repeat;
    background-size: cover;
    display:flex;
    justify-content: space-between;
}
.section>span{
    margin:auto 0;
    margin-left:.2rem;  
}
.section>div{
    display:flex;
    margin:auto 0;
 
}
.section>div a{
    display:block; 
    border-radius:.03rem;
    margin:0.05rem;
    text-align:center;
    line-height:.28rem;
}
.section>div a:nth-of-type(1){
    width:.88rem;
    height:.28rem;
    background: #42bd56;
    color:#ffffff;

}
.section>div a:nth-of-type(2){
    width:.62rem;
    height:.28rem;
    border:1px solid #42bd56;
    color:#42bd56;
    border-radius:.03rem;
}
</style>