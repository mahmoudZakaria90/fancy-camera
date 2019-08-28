<template>
  <div class="adjuster">
    <label>
      <span>Width:</span>
      <input @input="setWidth" type="text" :value="width" />
    </label>
    <label>
      <span>Height:</span>
      <input @input="setHeight" type="text" :value="height" />
    </label>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  props: ["width", "height"],

  methods: {
    setWidth(e) {
      if (e.target.value >= this.width) {
        bus.$emit("setWidth", e.target.value);
      }
    },
    setHeight(e) {
      if (e.target.value >= this.height) {
        bus.$emit("setHeight", e.target.value);
      }
    }
  }
};
</script>

<style scoped lang="sass">
  .adjuster
    background: lightblue
    padding: 15px
    text-align: center
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 999999

  label
    margin: 0 20px
</style>
