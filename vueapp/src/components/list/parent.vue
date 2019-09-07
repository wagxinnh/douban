<template>
    <div>
       <div class="con">
           <child v-for="(v,i) in partext" :key="i"  :imgs="v.image" :tits="v.title" :descs="v.content" :types="v.category_name"></child>
       </div>
    </div>
</template>
<script>
import child from './child'
export default {
    components:{
        child
    },
    props:{
        partext:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
.con{
    width:100%;
    padding: 0 .2rem;
}
</style>