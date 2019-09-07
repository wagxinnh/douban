<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // created(){
  //   this.router.beforeEach((to, from, next)=> {
  //     if(to.path=="/home"||to.path=="/reg"||to.path=="/login"){
  //       next();
  //     }else{
  //     // 1.把本地存储中的token取出来
  //     var localtoken = window.localStorage.getItem("token");
  //     // 2.发送给后端
  //     if (localtoken) {
  //       this.axios({
  //         url: "http://localhost:3000/index",
  //         method: "get",
  //         params: {token: localtoken }
  //       }).then(ok =>{
  //         if (ok.data.linkid == 8) {
  //           alert("欢迎您登陆");
  //         } else if (ok.data.linkid == 9) {
  //           alert("不好意思当前页面仅对会员开放请您登录后访问");
  //           next("/login");
  //         }
  //       });
  //     } else {
  //         alert("不好意思您没有登录，请您登录后访问");
  //         next("/login");
  //     };
  //   }
  // })
  // }
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,input,textarea,select,td,th{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
ul,ol{
	list-style: none;
}
html,body{
  height: 100%;
  background:#ffffff;
  
}
img{
	border: none;
}
html{
  font-size: 26.67vw;
  font-family: Arial, sans-serif,Helvetica;
}

</style>
