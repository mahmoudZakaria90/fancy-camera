<template>
  <div class="hero">
    <h1>Fancy Camera</h1>
    <p>Upload and crop images using camera lens style!</p>
    <uploader />
  </div>
</template>

<script>
import Uploader from "./Uploader.vue";
export default {
  components: {
    Uploader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  h1
    margin-top: 0
    margin-bottom: 0
  p
    margin-top: 1rem
    margin-bottom: 3rem
    
  .hero
    background: #efefef
    padding: 25px
    border-radius: 10px
    text-align: center
    
</style>
