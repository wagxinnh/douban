<template>
    <div class="header">
        <div>
            <span class="icon iconfont icon-wode"></span>
            <span class="login">{{tips}}</span>
        </div>
        <div>
            <span class="icon iconfont icon-biji"></span>
            <span class="icon iconfont icon-xiangji"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           tips:"请您登陆"
        }
    },
//      created() {
//     // 1.把本地存储中的token取出来
//     var localtoken = window.localStorage.getItem("token");
//     // 2.发送给后端
//     if (localtoken) {
//       this.axios({
//         url: "http://localhost:3000/index",
//         method: "get",
//         params: { token: localtoken }
//       }).then(ok => {
//         if (ok.data.linkid == 8) {
//           this.tips = "欢迎您" + ok.data.uemail;
//         } 
//       });
//   }
// }
}
</script>
<style scoped>
    .header{
        width:100%;
        height:.8rem;
        padding:0 .2rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #dfdfdf;
        color:#dfdfdf;
    }
   .icon-wode{
        font-size: 0.48rem;
        vertical-align: middle;
    }
   .login{
        font-size:.14rem;
        color:#aaaaaa;
    }
    .icon-biji{
       font-size: 0.25rem;
       padding: 0 .1rem;
       vertical-align: middle;
    }
    .icon-xiangji{
       font-size: 0.25rem;
       vertical-align: middle; 
    }
</style>