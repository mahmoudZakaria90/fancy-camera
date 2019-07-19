<template>
  <div>{{file}}</div>
</template>

<script>
export default {
  computed: {
    file() {
      return this.$store.state.file;
    }
  }
};
</script>

<style>
</style>
