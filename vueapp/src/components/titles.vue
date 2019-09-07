<template>
    <div>
        <p>{{tit}}</p> 
    </div>
</template>
<script>
export default {
    methods:{
    },
    props:{
        tit:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    div{
        width:100%;
        text-align:center;
    }
    p{
        margin: 0 auto;
        padding:.1rem 0;
        font-size:.16rem;
        color:#42bd56;
    }
</style>