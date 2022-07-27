<template>
  <div class="button container center px-l py-xxs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss">
.button {
  border: 2px solid $colors-secondary;
  color: $colors-secondary;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: $colors-secondary;
    color: $colors-light;
  }
}
</style>
