<template>
  <div>
    <ul>
      <li style="border-top:0" class="mui-table-view-cell mui-media">
          <img class="mui-m dia-object mui-pull-right" :src="imgs"/>
          <div class="mui-media-body titcont">
            {{tits}}
            <p class="mui-ellipsis conts">{{descs}}</p>
          </div>
          <div class="footer">
            <span>{{types}}</span>
            <span></span>
          </div>
      </li>
    </ul>
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
    types:{
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
ul li{
  height:1.9rem;
  padding-top:.15rem;
  border-bottom:1px solid #eeeeee;
}
img{
  display:block;
  width:1.0rem;
  height:1.2rem;
}
.titcont{
  width:65%;
}
.conts{
  margin-top:.1rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-line-clamp:2;
  line-clamp:2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.footer{
  padding-top:.1rem;
  width:100%;
  display:flex;
  justify-content: space-between;
  font-size:.12rem;
  color:#aaaaaa;
}
</style>