<template>
  <div>
    <div class="title">
      <router-link to="/movie">取消</router-link>
      <span>登录豆瓣</span>
    </div>
    <div class="header">
      <div class="mui-input-row">
        <input type="text" v-model="email" placeholder="邮箱" />
      </div>
      <div class="mui-input-row">
        <input type="password" v-model="pwd" class="mui-input-password" placeholder="Token" />
      </div>
      <button @click="fun()">登录</button>
      <span class="tips">{{tips}}</span>
      <p>使用其他方式登录&找回密码</p>
      <div>
        <span class="load" @click="reg()">注册豆瓣帐号</span>
        <span class="load">下载豆瓣App</span>
        <span class="load" @click="remove()">退出登陆</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      email: "",
      pwd: "",
      tips: ""
    };
  },
  methods: {
    fun() {
    //   let params=new URLSearchParams();
    //   params.append("uemail",this.email);
    //   params.append("upwd",this.pwd);
    //   this.axios({
    //     url: "http://localhost:3000/login",
    //     method: "post",
    //     data:params
    //   }).then(ok => {
    //     if (ok.data.linkid == 4) {
    //       window.localStorage.setItem("token", ok.data.token);
    //       var i = 5;
    //       setInterval(()=> {
    //         i--;
    //         if (i == 0) {
    //           this.$router.push("/home"); 
    //         }
    //         this.tips = "登录成功" + i + "秒后跳转至主页";
    //       }, 1000);
    //     } else if (ok.data.linkid == 5) {
    //       this.tips = "用户名与密码不符请重新登录";
    //     } else if (ok.data.linkid == 6) {
    //       this.tips = "网络超时请重新登录";
    //     }
    //   });
    // },
    // reg(){
    //   this.$router.push("/reg");
    // },
    // remove(){
    //   window.localStorage.removeItem("token");
    // }
  }
}
}
</script>
<style scoped>
.title {
  height: 0.5rem;
  border-bottom: 1px solid #eeeeee;
  padding: 0 0.2rem;
  margin-bottom: 0.12rem;
}
.title a {
  color: #42bd56;
  font-size: 0.15rem;
  line-height: 0.5rem;
}
.title > span {
  position: absolute;
  left: 50%;
  top: 0;
  line-height: 0.5rem;
  transform: translateX(-50%);
}
.header {
  width: 100%;
  padding: 0.2rem 0.15rem;
}
button {
  width: 3.45rem;
  height: 0.5rem;
  background: #17aa52;
  margin-top: 0.12rem;
  font-size: 0.17rem;
  color: #fff;
}
button,
p,
span {
  text-align: center;
}
p {
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}
.load {
  font-size: 0.14rem;
  color: #42bd56;
  margin: 0.1rem;
}
div:last-child {
  display: table;
  margin: auto;
}
.tips{
    height:.2rem;
    color:red;
    line-height:.2rem;
}
</style>