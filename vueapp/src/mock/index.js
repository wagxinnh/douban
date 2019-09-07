var Mock=require("mockjs");
// 配置数据请求
Mock.mock("/datas","get",require("./json/shouye.json"));
Mock.mock("/movie","get",require("./json/movie.json"));
Mock.mock("/appraise","get",require("./json/faxianmovie.json"));
Mock.mock("/books","get",require("./json/books.json"));
Mock.mock("/goodbooks","get",require("./json/goodbooks.json"));
Mock.mock("/teams","get",require("./json/teams.json"));

