<template>
  <div class="adjuster">
    <label>
      <span>Width:</span>
      <input :disabled="isResult" @input="setWidth" type="text" :value="width" />
    </label>
    <label>
      <span>Height:</span>
      <input :disabled="isResult" @input="setHeight" type="text" :value="height" />
    </label>
    <span>Min = 250, Max = Screen resolution</span>
  </div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "dir", "log"] }] */
import { bus } from "../../main";

export default {
  data() {
    return {
      isResult: false
    };
  },
  props: ["width", "height"],

  methods: {
    setWidth(e) {
      if (e.target.value >= this.width && e.target.value <= window.innerWidth) {
        bus.$emit("setWidth", e.target.value);
      }
    },
    setHeight(e) {
      if (
        e.target.value >= this.height &&
        e.target.value <= window.innerHeight
      ) {
        bus.$emit("setHeight", e.target.value);
      }
    }
  },
  created() {
    bus.$on("isResult", isResult => (this.isResult = isResult));
  }
};
</script>

<style scoped lang="sass">
  [disabled]
    opacity: .5
  .adjuster
    background: lightblue
    padding: 15px
    text-align: center
    position: relative
    z-index: 999   
  label
    margin: 0 20px
</style>
