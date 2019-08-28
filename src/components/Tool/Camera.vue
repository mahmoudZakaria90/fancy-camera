<template>
  <div>
    <div
      v-if="!isResult"
      @click="capture"
      class="camera"
      ref="camera"
      :style="{
      ...coords, width: mutableWidth + 'px', height: mutableHeight + 'px',
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

      <canvas ref="result" :width="mutableWidth" :height="mutableHeight"></canvas>

      <a :href="resultHref" download>Download</a>
    </div>
  </div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "dir", "log"] }] */
import { bus } from "../../main";

export default {
  props: ["width", "height", "coordLeft", "coordTop", "img"],
  data() {
    return {
      mutableWidth: this.width,
      mutableHeight: this.height,
      camera: null,
      resultHref: null,
      isResult: false
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
      const x = Number(this.coords.left.replace("px", ""));
      const y = Number(this.coords.top.replace("px", ""));

      context.drawImage(
        this.img,
        x,
        y,
        this.mutableWidth,
        this.mutableHeight,
        0,
        0,
        this.mutableWidth,
        this.mutableHeight
      );
      this.resultHref = canvas.toDataURL();
    }
  },
  methods: {
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
        console.log("Captured!");
        this.isResult = true;
        return;
      }
      console.log("Not boundry!");
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
  z-index: 9999
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
