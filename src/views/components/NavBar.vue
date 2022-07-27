<template>
  <nav class="m-l">
    <div class="nav-bar-container container">
      <div class="row">
        <div class="col-7">
          <div class="row left pl-m">
            <img class="svg-icon-logo-secondary col-2" />
            <div class="col-10">
              <p class="font-logo font-m-m font-secondary">Pharma Inc</p>
            </div>
          </div>
        </div>
        <div class="col-4 right pr-m">
          <div class="row">
            <img class="svg-icon-user-primary col-12" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.nav-bar-container {
  border: 1px solid $colors-light-gray;
  border-radius: 10px;

  .font-logo {
    font-family: "Pacifico", cursive;
  }
}
</style>
