<template>
  <div v-if="file" @mousemove="setCameraCoords">
    <img ref="img" :src="file" alt="image" />
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
      return this.$store.state.file.file;
    }
  },
  mounted() {
    if (!this.file) {
      this.$router.push("/");
      return;
    }
    const img = this.$refs.img;
    const offsetLeft = img.offsetLeft;
    const offsetTop = img.offsetTop;
    this.$store.dispatch("setImgOffset", {
      offsetLeft,
      offsetTop
    });
  },
  methods: {
    setCameraCoords(e) {
      this.coordLeft = e.clientX;
      this.coordTop = e.clientY;
    }
  }
};
</script>

<style>
</style>
