<template>
  <form>
    <input @change="onUpload" type="file" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    onUpload(e) {
      this.file = e.target.files[0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  form
    margin-top: 60px   
</style>
