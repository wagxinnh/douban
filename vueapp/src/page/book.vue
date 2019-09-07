<template>
    <div>
        <routernav></routernav>
        <morelist :movetit="arr[0].tit" :moremv="arr[0].mores"></morelist>
        <img src="../../static/img/loading.gif" v-if="mvlisa.length<=0">
        <mvparent :partext="mvlisa" v-else></mvparent>
        <morelist :movetit="arr[1].tit" :moremv="arr[1].mores"></morelist>
        <img src="../../static/img/loading.gif" v-if="mvlisb.length<=0">
        <mvparent :partext="mvlisb" v-else></mvparent>
        <morelist :movetit="arr[2].tit" :moremv="arr[2].mores"></morelist>
        <!-- <div class="imglist">
            <imgtitlist :imgs="booknews[0].image" :tits="booknews[0].subtitle" :descs="booknews[0].summary" :price="booknews[0].price" :key="i"></imgtitlist>
        </div> -->
        <img src="../../static/img/loading.gif" v-if="mvlisc.length<=0">
        <mvparent :partext="mvlisc" v-else></mvparent>
        <morelist :movetit="arr[3].tit" :moremv="arr[3].mores"></morelist> 
        <moviepull :appraise="prs"></moviepull>
        <p>分类浏览</p>
        <dividetype></dividetype>  
        <footers></footers>
    </div>
</template>
<script>
import routernav from '../components/routernav'
import morelist from "../components/morelist";
import mvparent from "../components/slider/mvparent";
import imgtitlist from "../components/imgtitlist";
import moviepull from "../components/moviepull";
import dividetype from "../components/dividetype";
import footers from "../components/footer";
export default {
    components:{
        routernav,
        morelist,
        mvparent,
        imgtitlist,
        moviepull,
        dividetype,
        footers,  
    },
    data() {
        return {
        arr: [
            { tit: "最受关注图书｜虚构类", mores: "更多" },
            { tit: "最受关注图书｜非虚构类", mores: "更多" },
            { tit: "豆瓣纸书", mores: "更多" },
            { tit: "发现好书", mores: "更多" },
        ],
        booknews:[{}],
        prs: [],
        mvlisa:[],
        mvlisb:[],
        mvlisc:[],
        }
    },
    created(){
        this.axios({
        url: "/books",
        method: "get"
        }).then(
        ok => {
            this.booknews= ok.data;
            ok.data.filter((v,i)=>{
            if(v.rating.average>8){
                this.mvlisa.push(v);
            };
            if(v.rating.average<8){
                this.mvlisb.push(v);
            };
            if(v.binding=="精装"){
                this.mvlisc.push(v);
            };
            }) 
        },
        err => {
            console.log(err);
        }
        );
        this.axios({
            url: "/goodbooks",
            method: "get"
            }).then(
            ok => {
                this.prs = ok.data;
            },
            err => {
                console.log(err);
            });
    }  
}
</script>
<style scoped>  
.imglist{
    width:100%;
}
p {
  padding: 0 0.2rem;
  margin: 0.1rem 0;
  font-size: 0.16rem;
  color: black;
}
img{
  display:block;
  margin:.2rem auto;
  width:.6rem;
  height:.6rem;
}
</style>