<template>
  <div class="adjuster">
    <label>
      <span>Lens width: </span>
      <input :disabled="isResult" @input="setWidth" type="text" :value="cameraSize.width" />
    </label>
    <label>
      <span>Lens height: </span>
      <input :disabled="isResult" @input="setHeight" type="text" :value="cameraSize.height" />
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
  computed: {
    cameraSize() {
      return this.$store.getters.cameraSize;
    }
  },
  methods: {
    setWidth(e) {
      if (
        e.target.value >= this.cameraSize.width &&
        e.target.value <= window.innerWidth
      ) {
        this.$store.dispatch("setWidth", e.target.value);
      }
    },
    setHeight(e) {
      if (
        e.target.value >= this.cameraSize.height &&
        e.target.value <= window.innerHeight
      ) {
        this.$store.dispatch("setHeight", e.target.value);
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
    background: #600cad
    color: white
    padding: 15px
    text-align: center
    position: relative
    z-index: 999   
  label
    margin: 0 20px
  input
    padding: 6px 10px
    border: none
    border-radius: 5px
</style>
