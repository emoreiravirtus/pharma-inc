<template>
  <table class="container">
    <tr class="font-primary">
      <th></th>
      <th class="clickable" @click="setOrderBy('name')">
        <div class="center p-xxs">
          <p>Name</p>
          <img
            v-if="orderBy === 'name' && increasing"
            class="svg-icon-ascending-primary ml-s"
          />
          <img
            v-if="orderBy === 'name' && !increasing"
            class="svg-icon-ascending-primary ml-s inverted"
          />
        </div>
      </th>
      <th class="clickable" @click="setOrderBy('gender')">
        <div class="center p-xxs">
          <p>Gender</p>
          <img
            v-if="orderBy === 'gender' && increasing"
            class="svg-icon-ascending-primary ml-s"
          />
          <img
            v-if="orderBy === 'gender' && !increasing"
            class="svg-icon-ascending-primary ml-s inverted"
          />
        </div>
      </th>
      <th class="clickable" @click="setOrderBy('birth')">
        <div class="center p-xxs">
          <p>Birth</p>
          <img
            v-if="orderBy === 'birth' && increasing"
            class="svg-icon-ascending-primary ml-s"
          />
          <img
            v-if="orderBy === 'birth' && !increasing"
            class="svg-icon-ascending-primary ml-s inverted"
          />
        </div>
      </th>
      <th></th>
    </tr>
    <TableItem v-for="(user, index) of users" :key="index" :user="user" />
  </table>
</template>

<script>
import TableItem from "./TableItem.vue";

export default {
  name: "Table",
  components: {
    TableItem,
  },
  computed: {
    users() {
      return this.$store.getters["filteredUsers"]
        ? this.$store.getters["filteredUsers"]
        : this.$store.getters["users"];
    },
    orderBy() {
      return this.$store.getters["orderBy"];
    },
    increasing() {
      return this.$store.getters["increasing"];
    },
  },
  methods: {
    setOrderBy(orderBy) {
      this.$store.dispatch("setOrderBy", orderBy);
    },
  },
};
</script>

<style lang="scss">
table {
  border-collapse: separate;
  border-spacing: 0 10px;

  .clickable {
    .center {
      border: 2px solid $colors-primary;
      border-radius: 5px;
      height: 15px;
      transition: 0.2s all;

      &:hover {
        background: $colors-primary;
        color: $colors-light;

        .svg-icon-ascending-primary {
          background: $colors-light;
        }
      }
    }
  }

  .svg-icon-descending-primary {
    width: 15px;
  }
}
</style>
