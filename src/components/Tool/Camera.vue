<template>
  <div
    @click="capture"
    class="camera"
    :style="{
      ...coords, width: mutableWidth + 'px', height: mutableHeight + 'px',
    }"
  ></div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
import { bus } from "../../main";

export default {
  props: ["width", "height", "coordLeft", "coordTop"],
  data() {
    return {
      mutableWidth: this.width,
      mutableHeight: this.height
    };
  },
  created() {
    bus.$on("setWidth", width => (this.mutableWidth = width));
    bus.$on("setHeight", height => (this.mutableHeight = height));
  },
  computed: {
    coords() {
      const width = this.mutableWidth / 2;
      const height = this.mutableHeight / 2;
      return {
        top: this.coordTop - height + "px",
        left: this.coordLeft - width + "px"
      };
    },
    imgOffsetLeft() {
      return this.$store.state.file.offsetLeft;
    },
    imgOffsetTop() {
      return this.$store.state.file.offsetTop;
    }
  },
  methods: {
    capture() {
      if (
        this.coordLeft >= this.imgOffsetLeft &&
        this.coordTop >= this.imgOffsetTop
      ) {
        console.log("Captured!");
        return;
      }
      console.log("Not boundry!");
    }
  }
};
</script>

<style scoped lang="sass">
.camera
  position: absolute
  box-shadow: 0 0 10px 9999px rgba(0,0,0,.8)
  cursor: none
  pointer-events: auto
</style>
