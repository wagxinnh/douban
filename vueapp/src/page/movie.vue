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
import routernav from "../components/routernav";
import morelist from "../components/morelist";
import mvparent from "../components/slider/mvparent";
import moviepull from "../components/moviepull";
import dividetype from "../components/dividetype";
import footers from "../components/footer";
export default {
  components: {
    routernav,
    morelist,
    mvparent,
    moviepull,
    dividetype,
    footers
  },
  data() {
    return {
      arr: [
        { tit: "影院热映", mores: "更多" },
        { tit: "免费在线观影", mores: "更多" },
        { tit: "新片速递", mores: "更多" },
        { tit: "发现好电影", mores: "更多" }
      ],
      prs: [],
      mvlisa:[],
      mvlisb:[],
      mvlisc:[]
    };
  },
  methods:{
  },
  created(){
    this.axios({
      url: "/movie",
      method: "get"
    }).then(
      ok => {
        ok.data.filter((v,i)=>{
          if(v.rating.average<9 && v.rating.average>8){
            this.mvlisa.push(v);
          };
           if(v.rating.average>9){
            this.mvlisb.push(v);
          };
           if(v.year>2000){
            this.mvlisc.push(v);
          };
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
  }
};
</script>
<style scoped>
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