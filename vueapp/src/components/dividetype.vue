<template>
<div>
    <ul>
        <li v-for="(v,i) in mvtypes" :key="i">
            <a :href="v.url">{{v.text}}</a>
            <span class="mui-icon  mui-icon-arrowright"></span>
        </li>
    </ul>
</div> 
</template>
<script>
export default {
    data() {
        return {
        mvtypes: [
            { text: "经典", url: "" },
            { text: "冷门佳片", url: "" },
            { text: "豆瓣高分", url: "" },
            { text: "动作", url: "" },
            { text: "喜剧", url: "" },
            { text: "爱情", url: "" },
            { text: "悬疑", url: "" },
            { text: "恐怖", url: "" },
            { text: "科幻", url: "" },
            { text: "治愈", url: "" },
            { text: "文艺", url: "" },
            { text: "成长", url: "" },
            { text: "华语", url: "" },
            { text: "欧美", url: "" },
            { text: "韩国", url: "" },
            { text: "日本", url: "" }
        ]
        }
    },
};
</script>
<style scoped>
ul {
  width: 100%;
  padding: 0 0.2rem;
  display: flex;
  flex-wrap: wrap;
}
ul > li {
  width: 50%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  padding-right:0.1rem;
  border: 1px solid #d8cbcb;
  border-left: none;
  border-bottom: none;
  justify-content: space-between;
}
ul > li:nth-child(2n) {
    border-right: none;
    padding-left:0.1rem;
}
li a {
  color: #42bd56;
}
li span{
    height: 0.4rem;
  line-height: 0.4rem; 
}
</style>
