<template>
  <div>
    <img :src="imgs" />
    <br/>
    <p>{{tits}}</p>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    imgs: {
      type: Array,
      required: true
    },
    tits: {
      type: Array,
      required: true
    },
  }
};
</script>
<style scoped>
div {
  font-size: 0
}
img {
  width: 1rem;
  height: 1.2rem;
  margin:.01rem;
}
p {
  font-size: 0.16rem;
  text-align:center;
}
</style>