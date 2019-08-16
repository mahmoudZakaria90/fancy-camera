<template>
  <div v-if="file" @mousemove="setCameraCoords">
    <img v-bind:src="file" alt="image" @mousemove="setImgCoords" />
    <Camera
      :coordLeft="coordLeft"
      :coordTop="coordTop"
      :width="cameraWidth"
      :height="cameraHeight"
    />
    <Adjuster :width="cameraWidth" :height="cameraHeight" />
  </div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
import Adjuster from "./Adjuster";
import Camera from "./Camera";

export default {
  data() {
    return {
      cameraWidth: 250,
      cameraHeight: 250,
      coordLeft: 0,
      coordTop: 0
    };
  },
  components: {
    Adjuster,
    Camera
  },
  computed: {
    file() {
      return this.$store.state.file;
    }
  },
  created() {
    !this.file && this.$router.push("/");
  },
  methods: {
    setCameraCoords(e) {
      this.coordLeft = e.clientX;
      this.coordTop = e.clientY;
    },
    setImgCoords(e) {
      e.stopPropagation();
      console.log(e);
    }
  }
};
</script>

<style>
</style>
