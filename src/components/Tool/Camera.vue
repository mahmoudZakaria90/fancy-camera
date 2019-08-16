<template>
  <div
    class="camera"
    :style="{...coords, width: mutableWidth + 'px', height: mutableHeight + 'px'}"
  ></div>
</template>

<script>
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
