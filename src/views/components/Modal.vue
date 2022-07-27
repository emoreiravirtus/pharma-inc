<template>
  <div v-if="isOpened" class="modal-back"></div>
  <div v-if="isOpened" class="container center modal-container shadowed">
    <div class="container">
      <img class="svg-icon-close-secondary clickable" @click="closeModal" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeModal() {
      this.$store.dispatch("setIsOpened", false);
    },
  },
  computed: {
    isOpened() {
      return this.$store.getters["isOpened"];
    },
  },
};
</script>

<style lang="scss">
.modal-container {
  width: 70vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      z-index: 11;
    }
  }
}

.modal-back {
  width: 100%;
  height: 100%;
  background: rgba($colors-normal-gray, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
}
</style>
