<template>
    <div>
        <routernav></routernav>
        <div class="section">
            <span>聊聊你的观影感受</span>
            <div>
                <a href="#">极速下载</a>
                <a href="#">打开</a>   
            </div>
        </div>
        <div class="mvnews">
            <div>
                <h3>{{news.title}}</h3>
                <div class="pingfen">
                    <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="radio">
                    </el-rate>
                    <span>{{news.collect_count}}人评价</span>
                </div> 
                <p>{{news.year}}/{{news.genres[0]}}/{{news.genres[1]}}/{{news.casts[0].name}}/{{news.casts[1].name}}/{{news.casts[2].name}}</p>
                <p>用App查看影人资料</p>
            </div>
            <img :src="news.images.small">
        </div>
        <div class="wantsee">
            <span>想看</span>
            <span>看过</span>      
        </div>
        <div class="intrcon">
             <p class="tits">大话西游的简介</p>
            <p>故事开始是观音菩萨要除掉孙悟空(周星驰饰)，因其伙同牛魔王欲杀害师父唐三藏（罗家英饰），并偷走了月光宝盒。唐三藏慈悲为怀，愿自杀以换悟空重生。</p>
            <p class="tits">查看更多相关分类</p>
            <div class="mvtype">
                <span>剧情</span>
                <span>爱情</span>      
                <span>战争</span>      
            </div>
            <p class="tits">大话西游的图片</p>
            <div class="imgcon">
                <sliderimg v-for="(v,i) in news.images" :imgs="news.images.large" :key="i"></sliderimg>
            </div>
            <p class="tits">大话西游的短评</p> 
        </div>
        <shoutrevw></shoutrevw>
        <shoutrevw></shoutrevw>
        <shoutrevw></shoutrevw>
        <shoutrevw></shoutrevw>
        <titles :tit="text1"></titles>
        <div class="ads">
            <img src="../../static/img/n2.png" alt="">
            <p class="tits">大话西游的问答</p>
        </div>
        <titles :tit="text2"></titles>
        <morelist :movetit="arr[0].tit" :moremv="arr[0].mores"></morelist>
        <moviepull :appraise="prs"></moviepull>
        <footers></footers>
    </div>
</template>
<script>
import routernav from '../components/routernav'
import morelist from "../components/morelist"
import moviepull from '../components/moviepull'
import titles from '../components/titles'
import sliderimg from '../components/sliderimg'
import shoutrevw from '../components/shoutrevw'
import footers from '../components/footer'
export default {
    components:{
        routernav,
        morelist,
        moviepull,
        shoutrevw,
        sliderimg,
        titles,
        footers
    },
    data(){
        return{
            text:"显示更多广播",
            text1:"显示更多评论",
            text2:"显示更多问答",
            news:[],
            prs:[],
            arr: [
                { tit: "推荐的豆列", mores: "更多" },
            ],
            value:0
         }  
    },
    created(){
    this.axios({
      url: "/movie",
      method: "get"
    }).then(
      ok => {
        ok.data.filter((v,i)=>{
            if(v.id==this.$route.params.id){
                this.news=v;
                this.value=this.news.rating.average/2;
            }
        })
      },
      err => {
        console.log(err);
      }
    );
    this.axios({
      url: "/appraise",
      method: "get"
    }).then(
      ok => {
        this.prs = ok.data;
      },
      err => {
        console.log(err);
      }
    );
  },
 computed: {
    radio(){
      return (this.value*2).toFixed(1)
    }
  },
};
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
.mvnews{
    width:100%;
    padding:0.1rem 0.2rem;
    display:flex;
    justify-content: space-between;
}
.mvnews>div{
     width:65%;
}
.mvnews img{
    width:1.2rem;
    height:1.7rem;
    border:1px solid black;
}
.mvnews h3{
    font-size:.20rem;
    height:.26rem;
    line-height:.26rem;
}
.pingfen{
    display:flex;
    margin:0.05rem 0;
}
.pingfen span{
    font-size:.14rem;
    margin-left:.1rem;
}
.mvnews>div p:nth-of-type(1){
    width:100%;
    display:inline-block;
    margin:.1rem 0;
    font-size:.16rem;
}
.mvnews>div p:nth-of-type(2){
    color:#42bd56;
}
.wantsee{
    display:flex;
    justify-content: space-between;
    padding:0.1rem  0.2rem;
}
.wantsee span{
    width:48%;
    height:.34rem;
    border:1px solid #ffb712;
    color:#ffb712;
    text-align:center;
    line-height:.34rem;
    border-radius:.05rem;
}
.intrcon{
    width:100%;
    padding:0 0.2rem;
}
.tits{
    clear:both;
    width:100%;
    height:.5rem;
    line-height:.5rem;
}
.mvtype span{
    display:block;
    width:.6rem;
    height:.3rem;
    border-radius: .15rem;
    background: #f5f5f5;
    margin-right:.1rem;
    text-align:center;
    line-height:.3rem;
    float:left;
    font-size:.16rem;
}
.ads{
    width:100%;
    padding:0 0.2rem;
}
.ads img{
    width:100%;
}
.imgcon{
    width:100%;
    display:flex;
    overflow-x: auto;
}
</style>
<style>
.el-rate__icon{
font-size:.15rem; 
margin-right: 0 !important;
margin-left:0 !important;
} 
</style>