<template>
  <div>
    <div
      v-if="!isResult"
      @click="capture"
      class="camera"
      ref="camera"
      :style="{
      ...coords, width: cameraSize.width + 'px', height: cameraSize.height + 'px',
    }"
    >
      <div class="camera-square"></div>
      <div class="camera-square"></div>
      <div class="camera-square"></div>
      <div class="camera-square"></div>
      <span class="camera-circle"></span>
    </div>

    <div class="result" v-if="isResult" @keyup.esc="resetIsResult">
      <div class="result-header">
        <span>Here you go!</span>
        <button class="dismiss" @click="resetIsResult">&times;</button>
      </div>

      <canvas ref="result" :width="cameraSize.width" :height="cameraSize.height"></canvas>

      <a :href="resultHref" download>Download</a>
    </div>
  </div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "dir", "log"] }] */
import { bus } from "../../main";

export default {
  props: ["coordLeft", "coordTop", "img"],
  data() {
    return {
      camera: null,
      resultHref: null,
      isResult: false
    };
  },
  created() {
    this.initSetup();
  },
  computed: {
    cameraSize() {
      return this.$store.getters.cameraSize;
    },
    coords() {
      const width = this.cameraSize.width / 2;
      const height = this.cameraSize.height / 2;
      return {
        top: this.coordTop - height + "px",
        left: this.coordLeft - width + "px"
      };
    }
  },
  mounted() {
    if (this.$refs.camera) {
      this.camera = this.$refs.camera;
    }
  },
  updated() {
    if (this.$refs.result) {
      const canvas = this.$refs.result;
      const context = canvas.getContext("2d");
      const adjusterHeight = 54;
      const x = Number(this.coords.left.replace("px", ""));
      const y = Number(this.coords.top.replace("px", "")) - adjusterHeight;

      context.drawImage(
        this.img,
        x,
        y,
        this.cameraSize.width,
        this.cameraSize.height,
        0,
        0,
        this.cameraSize.width,
        this.cameraSize.height
      );
      this.resultHref = canvas.toDataURL();
    }
    bus.$emit("isResult", this.isResult);
  },
  methods: {
    initSetup() {
      document.addEventListener("keyup", e => {
        if (e.key === "Escape" && e.keyCode === 27) {
          this.resetIsResult();
        }
        return;
      });
    },
    resetIsResult() {
      this.isResult = false;
    },
    capture() {
      const {
        top: imgTop,
        bottom: imgBottom,
        left: imgLeft,
        right: imgRight
      } = this.img.getBoundingClientRect();
      const {
        top: cameraTop,
        bottom: cameraBottom,
        left: cameraLeft,
        right: cameraRight
      } = this.camera.getBoundingClientRect();

      if (
        cameraLeft >= imgLeft &&
        cameraRight <= imgRight &&
        (cameraTop >= imgTop && cameraBottom <= imgBottom)
      ) {
        this.isResult = true;
        return;
      }
      return;
    }
  }
};
</script>

<style scoped lang="sass">
canvas
  display: block
  border: 2px solid white
  
.result
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 999999
  a
    display: inline-block
    padding: 10px 25px
    text-decoration: none
    border: 1px solid white
    border-radius: 20px
    color: white
    position: absolute
    bottom: -60px
    left: 50%
    transform: translate(-50%)
  &-header
    position: absolute
    top: -50px
    right: 0
    left: 0
    color: white
    font-size: 23px
    button
      background: transparent
      font-weight: 900
      border-radius: 50%
      border-color: white
      color: inherit
      font-size: inherit
      float: right
      cursor: pointer
    span
      float: left
      vertical-align: middle
  
.camera
  position: absolute
  cursor: none
  border-radius: 25px
  &-circle
    width: 50px
    height: 50px
    position: absolute
    border: 2px solid gold
    border-radius: 50%
    left: 50%
    top: 50%
    transform: translate(-50%,-50%)
    &:before
      content: ''
      position: absolute
      top: 8px
      left: 8px
      right: 8px
      bottom: 8px
      border-radius: 50%
      border: 2px solid gold
  &-square
    width: 50px
    height: 50px
    border: 2px solid gold
    position: absolute
    &:first-of-type
      border-radius: 15px 0 0 0
      top: 15px
      left: 15px
      border-bottom-color: transparent
      border-right-color: transparent

    &:nth-of-type(2)
      right: 15px
      top: 15px
      left: auto
      border-radius: 0 15px 0 0
      border-bottom-color: transparent
      border-left-color: transparent


    &:nth-of-type(3)
      top: auto
      bottom: 15px
      left: 15px
      border-radius: 0 0 0 15px
      border-top-color: transparent
      border-right-color: transparent


    &:last-of-type
      top: auto
      bottom: 15px
      right: 15px
      left: auto
      border-radius: 0 0 15px 0
      border-top-color: transparent
      border-left-color: transparent


.camera, .result
  box-shadow: 0 0 10px 9999px rgba(0,0,0,.8)
</style>
