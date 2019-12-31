<template>
  <div class="hero-outer">
    <a href="https://github.com/mahmoudZakaria90/fancy-camera">
      <img
        width="149"
        height="149"
        style="position: fixed;right:0; top:0"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
    <div class="hero-inner">
      <Hero />
    </div>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
export default {
  components: {
    Hero
  }
};
</script>


<style lang="sass" scoped>
  .hero
    &-outer
      height: 100%
      display: flex
      align-items: center
      padding: 0 15px
      background: url('../../assets/images/fancy-bg.jpg') no-repeat center center / cover
      &:before
        content: ''
        position: absolute
        left: 0
        right: 0
        bottom: 0
        top: 0
        background-color: rgba(0, 0, 0, .6)
    &-inner
      flex-grow: 1
      position: relative
      z-index: 9999
      margin: auto
      max-width: 660px
</style>
