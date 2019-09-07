<template>
  <div>
    <img :src="imgs" />
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    imgs: {
      type: String,
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
  width:2.16rem;
  height:1.4rem;
  margin-right:0.05rem;
}
</style>