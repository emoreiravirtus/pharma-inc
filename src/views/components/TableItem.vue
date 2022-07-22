<template>
  <td>{{ user.name.first }} {{ user.name.last }}</td>
  <td>
    {{ user.gender }}
  </td>
  <td>
    {{ user.dob.date }}
  </td>
  <td>
    <button>Show details</button>
  </td>
</template>

<script>
export default {
  name: "TableItem",
  props: {
    user: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
};
</script>

<style></style>
