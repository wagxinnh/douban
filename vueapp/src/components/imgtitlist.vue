<template>
  <div class="head">
    <div>
      <img :src="imgs" v-if="imgs">
      <div class="tit">
        <div>
          <span>{{tits}}</span>
          <span>{{price}}</span>
        </div>
        <p class="conts">{{descs}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    imgs: {
      type: String,
      // required: true
    },
    tits: {
      type: String,
      // required: true
    },
    descs:{
      type: String,
      // required: true
    },
    price:{
      type: String,
      // required: true
    }
  }
};
</script>
<style scoped>
.head{
width:100%;
padding: .1rem 0.2rem;
}
.head>div{
  width:100%;
  display:flex;
}
.tit{
  margin:.1rem;
  width:70%;
}
.tit>div{
  display:flex;
  justify-content: space-between;
}
img{
  display:block;
  width:1.0rem;
  height:1.2rem;
}
.conts{
  margin-top:.15rem;
  white-space: wrap;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  line-clamp:2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

</style>