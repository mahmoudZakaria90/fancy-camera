<template>
  <form @submit.prevent="upload">
    <input @change="viewFileName" type="file" id="uploader" hidden accept="image/*" />
    <label for="uploader">
      <span>Choose file</span>
      <span>{{fileName}}</span>
    </label>
    <button type="submit" class="submit">Submit</button>
  </form>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "log", "dir"] }] */
export default {
  data() {
    return {
      fileName: "No file."
    };
  },
  methods: {
    viewFileName(e) {
      const { files } = e.target;
      const [file] = files;
      const { name } = file;
      if (files.length) {
        this.fileName = name;
      }
    },
    upload(e) {
      const [uploader] = e.target;
      const { files } = uploader;
      const [file] = files;
      if (files.length) {
        this.$store.dispatch("uploadFile", URL.createObjectURL(file));
        this.$router.push("/tool");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  %btnStyle
    padding: 5px 8px
    background: lightblue
    color: white
    border-radius: 5px
    cursor: pointer
    border: none

  .submit
    @extend %btnStyle
  form
    margin-top: 60px
    text-align: center 
  label
    margin-right: 30px
    span
      margin: 0 15px
      &:first-child
        @extend %btnStyle
</style>
