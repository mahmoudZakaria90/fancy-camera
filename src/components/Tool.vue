<template>
  <div v-if="file">
    <img v-bind:src="file" alt="image" />
  </div>
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
