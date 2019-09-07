var express = require("express");
var app = express();
var mongoose = require("mongoose");
// 加密模块
var crypto = require("crypto");
// 10.应用post的解析模块
var bodyparser = require("body-parser");
// 11.使用body-parser下的解析post功能
var uE = bodyparser.urlencoded({ extended: false });
// 引用token模块
var jwt = require("jsonwebtoken");
// 创建集合
var dbcollection = mongoose.model("usernews", {
    uemail: String,
    upwd: String,
    uname: String
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})

app.get("/reg", function (req, res) {
    var uemail = req.query.uemail;
    var upwd = req.query.upwd;
    var uname = req.query.uname;
    //  加密
    var md5pwd = crypto.createHash('md5').update(upwd).digest('hex');
    mongoose.connect("mongodb://localhost:27017/userinfo", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log("数据库连接失败");
        } else {
            console.log("数据库连接成功");
            dbcollection.find({ uname }).then((ok) => {
                if (ok.length > 0) {
                    res.send({ "mse": "用户名已存在", status: 200, linkid: 1 });
                } else {
                    //存储数据
                    var usernews = new dbcollection({
                        uemail,
                        upwd: md5pwd,
                        uname
                    })
                    usernews.save().then((ok) => {
                        res.send({ "mse": "注册成功", status: 200, linkid: 2 });
                    }, (err) => {
                        res.send({ "mse": "注册失败", status: 200, linkid: 3 });
                    });
                }
            }, (err) => {
                console.log(err);
            })
        }
    })
})
app.post("/login",uE,function(req,res){
    var uemail=req.body.uemail;
    var upwd=req.body.upwd;
     //  加密
    var md5pwd=crypto.createHash('md5').update(upwd).digest('hex');

    mongoose.connect("mongodb://localhost:27017/userinfo",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            dbcollection.find({uemail:uemail,upwd:md5pwd}).then((ok)=>{
            if(ok.length>0){
                // 1.在登录成功之后创建一个token
                var obj={
                    loginok:true,
                    uemail:uemail
                }
                var mi="shdenkedk46nkfekjd"
                var token=jwt.sign(obj,mi);
                // 2.并且把这个token 发送给前端 
                res.send({mse:"登录成功",status:200,linkid:4,token});
            }else{
                res.send({mse:"登陆失败",status:200,linkid:5});
             }
         },(err)=>{
            res.send({mse:"连接超时请稍后再试",status:500,linkid:6})
         })
        }
    })
})

app.get("/index",function(req,res){
    // 3.后端进行解密 然后判断解密出来的数据是否是登陆过的  把结果返回给前台   前台做出相关的界面提示
    var token=req.query.token;
    var mi="shdenkedk46nkfekjd";
    jwt.verify(token,mi,function(err,data){
        // console.log(data);
        if(data){
            if(data.loginok==true){
                res.send({mes:"用户登陆过",status:200,linkid:8,uemail:data.uemail})
            }else{
                res.send({mes:"用户没有登陆过",status:200,linkid:9})  
            }
        } 
    })
})
app.listen(3000);