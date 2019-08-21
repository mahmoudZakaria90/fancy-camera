<template>
  <div>
    <input @change="upload" type="file" id="uploader" hidden />
    <label for="uploader">
      <span>Choose file</span>
      <span>{{fileName}}</span>
    </label>
    <router-link to="/tool" tag="button" class="submit">Submit</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: "No file."
    };
  },
  methods: {
    upload(e) {
      const files = e.target.files;
      if (files.length) {
        this.fileName = files[0].name;
        this.$store.dispatch("uploadFile", URL.createObjectURL(files[0]));
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
  div
    margin-top: 60px 
  label
    margin-right: 30px
    span
      margin: 0 15px
      &:first-child
        @extend %btnStyle
</style>
