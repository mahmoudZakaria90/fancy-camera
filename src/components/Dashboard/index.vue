<template>
  <div>
    <div style="text-align: right">
      <h3 style="display:inline-block; margin: 0 200px 0 0; padding: 10px 0">No UI, not yet!</h3>
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
    </div>
    <Header />
    <Uploader />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Uploader from "./Uploader.vue";
export default {
  components: {
    Header,
    Uploader
  }
};
</script>
