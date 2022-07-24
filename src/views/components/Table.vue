<template>
  <table class="container">
    <tr class="font-primary">
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

<style lang="scss">
  table {
    border-collapse:separate; 
    border-spacing: 0 10px;
  }
</style>
