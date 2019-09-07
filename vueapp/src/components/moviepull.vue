<template>
    <div >
        <ul class="movins">
            <li  v-for="(v,i) in appraise" :key="i">
                <a :href="v.href" :style="{color:v.color}" v-if="!v.line" >{{v.title}}</a>
            </li>
        </ul>
    </div>   
</template>
<script>
export default {
    methods:{
    },
    props:{
    appraise:{
        type:Array,
    },  
    }
}
</script>
<style scoped>
.movins {
  width: 100%;
  padding: 0 0.2rem;
  overflow-x: auto;
  white-space: nowrap;
}
li{
display: inline-block;
border:1px solid #ffac2d;
margin:.1rem;
margin-left: 0;
border-radius:.03rem;
}   
a{  
    display:inline-block;
    font-size:.14rem;
    padding:.1rem;  
}
ul li:empty{
    widows: 100%;
    height: .01rem;
    display: block;
    border: none;
    margin: 0;
    padding: 0;
}

</style>