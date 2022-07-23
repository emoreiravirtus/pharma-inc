<template>
  <table class="container">
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Birth</th>
      <th>Actions</th>
    </tr>
    <TableItem v-for="(user, index) of users" :key="index" :user="user" />
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
