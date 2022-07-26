<template>
  <div class="m-m">
  <div class="container loading-container clickable">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-12 center font-s-l">
            <p v-if="!isLoading">Load More</p>
            <p v-if="isLoading">Loading</p>
          </div>
        </div>
      </div>
      <div class="col-4 center">
        <div class="loading-icon container center p-xxs">
          <div class="row">
            <div class="col-4 center">
              <div class="loading-ball shadowed loading-ball__first" :class="{'loading-ball__animated': isLoading}"></div>
            </div>
            <div class="col-4 center">
              <div class="loading-ball shadowed loading-ball__second" :class="{'loading-ball__animated': isLoading}"></div>
            </div>
            <div class="col-4 center">
              <div class="loading-ball shadowed loading-ball__third" :class="{'loading-ball__animated': isLoading}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    isLoading: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss">
.loading-container {
  width: 250px;
  border: 2px solid $colors-primary;
  border-radius: 20px;
  color: $colors-primary;
  transition: .2s all;

  &:hover {
    transform: translateY(-5px);
  }
}

.loading-icon {
  width: 25px;
  height: 25px;

  .loading-ball {
    width: 5px;
    height: 5px;
    background: $colors-primary;
    border-radius: 50%;
    transition: all .2s;

    &__animated {
      animation: 1.5s infinite loading;
    }

    &__first {
      animation-delay: 0s;
    }

    &__second {
      animation-delay: 0.1s;
    }

    &__third {
      animation-delay: 0.2s;
    }
  }
}

@keyframes loading {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
