<template>
  <div class="m-l">
    <div class="container">
      <div class="row">
        <div class="col-12 center">
          <input
            class="searching-bar p-s font-m-m"
            type="text"
            placeholder="Search for name or nacionality"
            v-model="searchTerm"
          />
          <div v-if="searchTerm" class="clickable searching-button p-xxs">
            <img class="svg-icon-searching-light" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchingBar",
  data() {
    return {
      searchTerm: ''
    }
  }
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
    border: 2px solid $colors-secondary;
    transform: scale(1.1);
  }
}

.searching-button {
  transform: translateX(-50px);
  background: $colors-secondary;
  border-radius: 5px;
  transition: .1s all;

  &:hover {
    transform: translateY(-5px) translateX(-50px);
  }

  &:active {
    transform: translateY(2px) translateX(-50px);
  }
}
</style>
