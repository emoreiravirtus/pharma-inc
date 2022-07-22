<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Birth</th>
      <th>Actions</th>
    </tr>
    <tr v-for="(user, index) of users" :key="index">
      <TableItem :user="user" />
    </tr>
  </table>
</template>

<script>
import TableItem from './TableItem.vue';

export default {
  name: "Table",
  components: {
    TableItem
  },
  props: {
    users: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style></style>
