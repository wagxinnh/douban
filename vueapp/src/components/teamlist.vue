<template>
  <div class="heads">
    <div>
      <div class="htit">
        <img class="mui-m dia-object" :src="imgs"/>
        <span>{{tits}}</span>
      </div>
      <span>{{num|fils}}</span>
    </div>
    <p class="conts">{{descs}}</p>
  </div>
</template>
<script>
export default {
  components: {
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
    descs:{
      type: String,
      required: true
    },
    num:{
      type: String,
      required: true
    }
  },
  filters:{
      fils:function(val){
          return val+"人"
      }
  }
};
</script>
<style scoped>
.heads{
  width:100%;
  padding:.18rem .2rem;
  border-bottom:1px solid #dfdfdf;
}
.heads>div{
  height:.48rem;
  border-bottom:1px solid #eeeeee;
  display:flex;
  justify-content: space-between;
}
.heads>div>span{
  height:.48rem;
  line-height:.48rem;
}
img{
  width:.48rem;
  height:.48rem;
  vertical-align: middle;
}
.htit{
  display:flex;
  line-height:.48rem;
}
.htit span{
  margin-left:.1rem;
  width:2rem;
  line-height:.48rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.conts{
  margin-top:.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>