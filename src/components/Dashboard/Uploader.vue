<template>
  <form @submit.prevent="upload">
    <input @change="viewFileName" type="file" id="uploader" hidden accept="image/*" />
    <label for="uploader">
      <span>Choose file</span>
      <span class="filename">{{fileName}}</span>
    </label>
    <button type="submit" class="submit" :disabled="fileName === 'No file.'">Submit</button>
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
    background: blueviolet
    color: white
    border-radius: 5px
    cursor: pointer
    border: none

  .submit
    @extend %btnStyle
    &:disabled
      background-color: #cad0d2
      color: blueviolet
      cursor: not-allowed
      opacity: 0.5

  .filename
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    display: inline-block
    max-width: 290px
    vertical-align: middle

  form
    text-align: center
    padding: 25px
    background-color: white
    border-radius: 10px
  label
    margin-right: 30px
    span
      margin: 0 15px
      &:first-child
        @extend %btnStyle
</style>
