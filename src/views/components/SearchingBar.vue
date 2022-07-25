<template>
  <div class="m-l">
    <div class="container">
      <div class="row">
        <div class="col-12 center">
          <input
            class="searching-bar p-s font-m-m"
            type="text"
            placeholder="Search for names, phones, etc."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchingBar",
};
</script>

<style lang="scss">
.searching-bar {
  border: 1px solid $colors-light-gray;
  border-radius: 5px;
  width: 300px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border: 2px solid $colors-primary;
    transform: scale(1.1);
  }
}
</style>
