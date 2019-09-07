var express=require("express");
var app=express();
// 下载session模块并引用
var session=require("express-session");
// 在中间件设置session及其过期时间
app.use(session({
secret:"snfefefneixmmwdwo",//设置签名密钥 内容可以任意填写
cookie:{maxAge:12*3600*1000},//设置cookie的过期时间 例：一天后session和相应的cookie失效过期
resave:true,//强制保存；如果session没有被修改也要重新保存；
saveUninitialized:false //如果原先没有session那么就设置 否则不设置
}));
// 查询session
app.get("/check",function(req,res){
    res.send(req.session)
})
//设置session
app.get("/insert",function(req,res){
    //定义一个变量在下次判断 if(req.session.loginok==true)是否储存过此session；
    req.session.loginok=true;
    req.session.uname="hahahhha";
    console.log(req.session)
    res.send(req.session);
})
// 删除session
app.get("/remove",function(req,res){
    req.session.destroy()
    res.send(req.session)
})
app.listen(3000);
