<template>
    <div class="liscon">
        <span>{{movetit}}</span>
        <span>{{moremv}}</span>   
    </div>
</template>
<script>
export default {
    methods:{
    },
    props:{
        movetit:{
            type:String,
            required:true
        },
        moremv:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
.liscon{
    width:100%;
    height:.50rem;
    display:flex;
    justify-content: space-between;
    line-height:.50rem;
    padding: 0  0.2rem;
    }
span:last-child{
    font-size:.14rem;
    color:#42bd56;
}
</style>