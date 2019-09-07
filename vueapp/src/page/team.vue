<template>
    <div class="header">
        <routernav></routernav>
        <logintip></logintip>
        <div class="tittype">租房找室友</div>
        <div>
            <teamlist v-for="(v,i) in teama" :imgs="v.images.small" :tits="v.title" :descs='v.group_topic.time+v.group_topic.title' :num="v.group_member" :key="i"></teamlist>
        </div>
        <titles :tit="text"></titles>
        <div class="tittype">来聊五块钱</div>
        <div>
           <teamlist v-for="(v,i) in teamb" :imgs="v.images.small" :tits="v.title" :descs='v.group_topic.time+v.group_topic.title' :num="v.group_member" :key="i"></teamlist>
        </div>
        <titles :tit="text"></titles>
        <div class="tittype">买买买</div>
        <div>
            <teamlist v-for="(v,i) in teamc" :imgs="v.images.small" :tits="v.title" :descs='v.group_topic.time+v.group_topic.title' :num="v.group_member" :key="i"></teamlist>
        </div>
        <titles :tit="text"></titles>
        <footers></footers>
    </div>
</template>
<script>
import routernav from '../components/routernav'
import logintip from '../components/logintip'
import teamlist from '../components/teamlist'
import titles from '../components/titles'
import footers from '../components/footer'
export default {
    components:{
        routernav,
        logintip,
        teamlist,
        titles,
        footers
    },
    data(){
        return{
            teama:[],
            teamb:[],
            teamc:[],
            text:"更多相关小组"
        }
    },
     created(){
         this.axios({
              url:"/teams",
              method:"get"
          }).then((ok)=>{
            //   console.log(ok.data.xiaozua); 
              this.teama=ok.data.xiaozua;
              this.teamb=ok.data.xiaozub;
              this.teamc=ok.data.xiaozuc;
          },(err)=>{
              console.log(err)
        });
    },
}
</script>
<style scoped> 
.tittype{
    padding:.1rem;
}
</style>