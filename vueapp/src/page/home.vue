<template>
  <div class="header">
    <span class="tips">{{tips}}</span>
    <routernav></routernav>
    <homenav></homenav>
    <div>
      <img src="../../static/img/loading.gif" v-if="arr.length<=0">
      <parent v-else :partext="arr"></parent>
    </div>
  </div>
</template>
<script>
import routernav from "../components/routernav";
import homenav from "../components/homenav";
import parent from '../components/list/parent'
export default {
  components: {
    routernav,
    homenav,
    parent
  },
  data() {
    return {
      tips: "",
      arr:[]
    };
  },
  created() {
      this.axios({
          url:"/datas",
          method:"get"
      }).then((ok)=>{
          setTimeout(()=>{
            this.arr=ok.data;
          },500);  
      },(err)=>{
          console.log(err)
    })
  }
};
</script>
<style scoped>
img{
  display:block;
  margin:0 auto;
}
</style>
 
