<template>
  <div>
    <input @change="onUpload" type="file" />
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  methods: {
    onUpload(e) {
      this.$store.dispatch(
        "updateFile",
        URL.createObjectURL(e.target.files[0])
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  form
    margin-top: 60px   
</style>
