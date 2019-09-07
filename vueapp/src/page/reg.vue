<template>
    <div class="header">
        <h2>欢迎加入豆瓣</h2>
        <div class="mui-input-row">
			<input type="text" v-model="email" placeholder="邮箱"/>
		</div>
		<div class="mui-input-row">
			<input type="password" v-model="pwd" placeholder="密码"/>
			<span  class="mui-input-password"></span>
				
		</div>
		<div class="mui-input-row">
			<input type="text" v-model="name" placeholder="用户名"/>
		</div>	
        <button @click="fun()">立即注册</button>
		<span>{{tips}}</span>
		<p>点击「注册」代表你已阅读并同意用户使用协议</p>
		<p class="load">下载豆瓣App</p>
    </div>
</template>
<script>
export default {
    components:{
    },
    data(){
		return{
			email:"",
			pwd:"",
			name:"",
			tips:""
		}
	},
	methods:{
		fun(){
		// 	this.axios({
		// 		url:"http://localhost:3000/reg",
		// 		method:"get",
		// 		params:{uemail:this.email,upwd:this.pwd,uname:this.name}
		// 		}).then((ok)=>{
		// 			if(ok.data.linkid==1){
		// 			    this.tips="亲，该用户名已存在";
		// 			}else if(ok.data.linkid==2){
		// 				var i=5;
		// 				setInterval(()=>{
		// 					i--;
		// 					if(i==0){
        //                         this.$router.push("/login");  
		// 					}
		// 					this.tips="注册成功"+i+"秒后跳转至登陆页";
		// 				},1000)
		// 			}else if(ok.data.linkid==3){
		// 				this.tips="网络超时请重新连接";
		// 			}
		// 		})
			}
		}
}   
</script>
<style scoped> 
@import '../../static/mui/css/mui.css';
.header {
  width: 100%;
  padding: 0.2rem 0.15rem;
} 
h2{
    font-size:.4rem;
    color:#42bd56;
    text-align:center;
    margin: 10% 0;
    font-weight: 300;
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
}
span{
    height:.2rem;
    color:red;
    line-height:.2rem;
}
</style>