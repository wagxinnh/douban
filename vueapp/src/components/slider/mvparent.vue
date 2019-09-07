<template>
    <div class="con">
        <router-link :to="{name:'infonews',params:{id:v.id}}" v-for="(v,i) in partext" :key="i">
            <mvchild  :imgs="v.images.small" :tits="v.title" :score="v.rating.average"></mvchild>
        </router-link>
    </div>
</template>
<script>
import mvchild from './mvchild'
export default {
    components:{
        mvchild
    },
    props:{
        partext:{
            type:Array,
            required:true
        }
    },
    methods:{
        fun(){
            this.$router.push("/infonews");
        }
    }
}
</script>
<style scoped>
.con{
    width:100%;
    display:flex;
    overflow-x: auto;
    padding:0 0.2rem;
}
</style>