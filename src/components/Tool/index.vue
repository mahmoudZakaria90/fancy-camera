<template v-if="file">
  <div @mousemove="setCameraCoords">
    <Adjuster />
    <img ref="img" :src="file" alt="image" />
    <Camera :coordLeft="coordLeft" :coordTop="coordTop" :img="img" />
  </div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "log", "dir"] }] */
import Adjuster from "./Adjuster";
import Camera from "./Camera";

export default {
  data() {
    return {
      coordLeft: 0,
      coordTop: 0,
      img: null
    };
  },
  components: {
    Adjuster,
    Camera
  },
  computed: {
    file() {
      return this.$store.state.file.blob;
    }
  },
  created() {
    if (!this.file) {
      this.$router.push("/");
      return;
    }
  },
  mounted() {
    if (this.$refs.img) {
      this.img = this.$refs.img;
    }
  },
  methods: {
    setCameraCoords(e) {
      this.coordLeft = e.pageX;
      this.coordTop = e.pageY;
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
