<template>
  <div v-if="isOpened" class="modal-back"></div>
  <div v-if="isOpened" class="container center modal-container shadowed">
    <div class="container">
      <img class="svg-icon-close-secondary clickable" @click="closeModal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeModal () {
      this.$store.dispatch('setIsOpened', false);
    }
  },
  computed: {
    isOpened() {
      return this.$store.getters['isOpened'];
    }
  }
};
</script>

<style lang="scss">
.modal-container {
  position: absolute;
  width: calc(100vw - 20vw);
  height: calc(100vh - 20vh);
  border-radius: 10px;
  background: $colors-light;
  z-index: 10;

  & .container {
    position: relative;
    width: 100%;
    height: 100%;

    .svg-icon-close-secondary {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
}

.modal-back {
  width: 100%;
    height: 100%;
    position: absolute;
    background: rgba($colors-normal-gray, .5);
    top: 0;
    left: 0;
    z-index: 9;
}
</style>
