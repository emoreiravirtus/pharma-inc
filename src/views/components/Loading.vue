<template>
  <div v-if="visible" class="container">
    <div class="row">
      <div class="col-12">
        <div class="loading-icon container center p-xxs">
          <div class="row">
            <div class="col-4 center">
              <div class="loading-ball loading-ball__first"></div>
            </div>
            <div class="col-4 center">
              <div class="loading-ball loading-ball__second"></div>
            </div>
            <div class="col-4 center">
              <div class="loading-ball loading-ball__third"></div>
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
    visible: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss">
.loading-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: $colors-secondary;

  .loading-ball {
    width: 10px;
    height: 10px;
    background: $colors-light;
    border-radius: 50%;
    animation: 1.5s infinite loading;

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
