<template>
  <div>
    <img :src="imgs" />
    <br/>
    <p>{{tits}}</p>
    <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      :score-template="radio">
    </el-rate>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
      return {
        value:0
      }
  },
  computed: {
    radio(){
      return (this.value*2).toFixed(1)
    }
  },
  props: {
    imgs: {
      type: String,
      required: true
    },
    tits: {
      type: String,
      required: true
    },
    score:{
      // type:Number,
    }
  },
  // 处理请求回来的分数  除以二
  created() {
      this.value=(this.score/2);
  },
};
</script>
<style scoped>
div {
  font-size: 0
}
img {
  width: 1.3rem;
  height: 1.8rem;
  margin: 0 .05rem .1rem;
} 
p {
  width: 1.3rem;
  font-size: 0.16rem;
  text-align:center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<style>
.el-rate__icon{
margin-right: 0;
} 
.el-rate__icon:nth-of-type(1){
  margin-left:0.03rem;
}
</style>