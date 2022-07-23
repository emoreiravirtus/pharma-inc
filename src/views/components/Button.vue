<template>
  <div class="button container center px-l py-xxs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
  .button {
    border: 2px solid $colors-primary;
    color: $colors-primary;
    font-weight: 600;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: .4s;

    &:hover {
      background: $colors-primary;
      color: $colors-light;
    }
  }
</style>