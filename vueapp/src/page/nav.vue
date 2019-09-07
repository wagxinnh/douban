<template>
  <div>
    <div class="header">
      <router-link to="/home">关闭</router-link>
      <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder />
      </div>
    </div>
    <div>
      <infonav>
      </infonav>
    </div>
    <div class="footer">
      <router-link to="/reg">注册账号</router-link>
      <router-link to="/login">登录土豆</router-link>        
    </div>
  </div>
</template>
<script>
import infonav from "../components/infonav";
export default {
  components: {
    infonav
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.58rem;
  display: flex;
  border-bottom: 1px solid #eeeeee;
  padding: 0 0.1rem 0;
}
.header a {
  font-size: 0.16rem;
  color: #42bd58;
  line-height: 0.58rem;
}
.header div {
  width: 85%;
  height: 0.38rem;
  margin: auto 0.1rem;
}
.footer{
  width:100%;
  height:.48rem;
  display: flex;
  border-bottom: 1px solid #eeeeee;
}
.footer a{
  width:50%;
  height:.15rem;
  text-align:center;
  font-size: 0.16rem;
  color:#42bd56;
  line-height:.14rem;
  margin:auto 0;
  
}
.footer a:nth-child(1){
  border-right:1px solid #eeeeee;
}
</style>