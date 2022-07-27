<template>
  <div v-if="focusedUser" class="container focused-user-container">
    <div class="row">
      <div class="col-12 center profile-large">
        <div class="wrapper"></div>
        <img :src="focusedUser.picture.large" />
      </div>
      <div class="col-12 center">
        <p class="font-m-l font-secondary">
          {{ focusedUser.name.first }} {{ focusedUser.name.last }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-5 right pr-s">
        <p class="font-s-m">
          <span class="font-s-l">Phone:</span> {{ focusedUser.phone }}
        </p>
      </div>
      <div class="col-5 left pl-s">
        <p class="font-s-m">
          <span class="font-s-l">Email:</span> {{ focusedUser.email }}
        </p>
      </div>
      <div class="col-5 right pr-s">
        <p class="font-s-m">
          <span class="font-s-l">Gender:</span> {{ focusedUser.gender }}
        </p>
      </div>
      <div class="col-5 left pl-s">
        <p class="font-s-m">
          <span class="font-s-l">Location:</span>
          {{ focusedUser.location.street.name }},
          {{ focusedUser.location.street.number }},
          {{ focusedUser.location.city }} ({{ focusedUser.location.state }}) -
          {{ focusedUser.location.country }}
        </p>
      </div>
      <div class="col-5 right pr-s">
        <p class="font-s-m">
          <span class="font-s-l">Birthdate:</span> {{ birthDate }}
        </p>
      </div>
      <div class="col-5 left pl-s">
        <p class="font-s-m">
          <span class="font-s-l">Nationality:</span> {{ focusedUser.nat }}
        </p>
      </div>
      <div class="col-5 right pr-s">
        <p class="font-s-m"><span class="font-s-l">ID:</span> {{ userId }}</p>
      </div>
      <div class="col-5 left pl-s">
        <p class="font-s-m">
          <span class="font-s-l">URL:</span>
        </p>
        <div class="left ml-s">
          <Button @click="copyURL" class="url-button"
            >{{ userURL }}<img class="svg-icon-copy-secondary ml-s" />
            <span class="ml-s">{{ copyText }}</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "@/util/formatDate.js";
import Button from "./Button.vue";

export default {
  name: "FocusedUser",
  data() {
    return {
      copyText: "copy",
    };
  },
  components: {
    Button,
  },
  methods: {
    copyURL() {
      navigator.clipboard.writeText(this.userURL);
      this.copyText = "copied!";
    },
  },
  computed: {
    focusedUser() {
      return this.$store.getters["focusedUser"];
    },
    birthDate() {
      return formatDate(new Date(this.focusedUser.dob.date));
    },
    userId() {
      return this.$route.params.id;
    },
    userURL() {
      return `localhost:8080/${this.userId}`;
    },
  },
};
</script>

<style lang="scss">
.focused-user-container {
  transform: translateY(-60px);

  .profile-large {
    position: relative;
    .wrapper {
      background: $colors-secondary;
      position: absolute;
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }
    img {
      border-radius: 50%;
      z-index: 9;
    }
  }

  .url-button {
    height: 20px;

    &:hover {
      .svg-icon-copy-secondary {
        background: $colors-light;
      }
    }
  }
}
</style>
