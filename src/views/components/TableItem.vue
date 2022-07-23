<template>
  <tr class="table-item">
    <td>{{ user.name.first }} {{ user.name.last }}</td>
    <td>
      <img v-if="user.gender === 'male'" class="svg-icon-male-primary">
      <img v-else class="svg-icon-female-secondary">
    </td>
    <td>
      {{ birthDate }}
    </td>
    <td>
      <Button>More</Button>
    </td>
  </tr>
</template>

<script>
import Button from "./Button.vue";
import formatDate from '@/util/formatDate.js'

export default {
  name: "TableItem",
  components: {
    Button,
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    birthDate() {
      return formatDate(new Date(this.user.dob.date));
    }
  }
};
</script>

<style lang="scss">
.table-item {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 15px;
  border-radius: 5px;

  td {
  padding: 10px;
  }
}
</style>
