<template>
    <div class="infos">
        <div v-for="(v,i) in arr" @click="fun(i)" :key="i">
            <h2 :style="{color:v.color}">{{v.title}}</h2>
            <p>{{v.desc}}</p>
        </div>      
    </div>  
</template>
<script>
export default {
    data() {
    return {
      arr: [
        { title: "电影", desc: "影院热映",color:"#2384e8",routurl:"/movie"},
        { title: "电视", desc: "正在热播",color:"#7a6adb" ,routurl:"/home"},
        { title: "图书", desc: "畅销排行",color:"#dba260",routurl:"/home"},
        { title: "同城", desc: "周末活动",color:"#e6467e" ,routurl:"/home"},
        { title: "小组", desc: "志趣相投",color:"#2ab8cc" ,routurl:"/home"},
        { title: "音乐", desc: "新碟榜",color:"#f48f2e",routurl:"/home"},
        { title: "阅读", desc: "电子书",color:"#9f7860" ,routurl:"/home"},
        { title: "游戏", desc: "虚拟世界",color:"#5774cf",routurl:"/home" },
        { title: "应用", desc: "玩手机",color:"#596cdd",routurl:"/home" },
        { title: "东西", desc: "心爱之物",color:"#e1644d",routurl:"/home"},
        { title: "FM", desc: "红心歌单",color:"#40cfa9" ,routurl:"/home"},
        { title: "市集", desc: "购买原创",color:"#42bd56",routurl:"/home"}
      ]
    };
  },
  methods:{
      fun(i){
        this.$router.push(this.arr[i].routurl)  
      }
  }
}
</script>
<style scoped>
.infos {
  width: 100%;
  padding-top: 0.25rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 1px solid #eeeeee;
}
.infos>div {
  width: 33.33%;
  text-align:center;
  margin-bottom:.3rem;
}
.infos>div h2 {
  font-size:.24rem;
  line-height:.30rem;
  font-weight:300;
}
.infos>div p{
  font-size: 0.12rem;
  line-height:.18rem;
}  





















</style>