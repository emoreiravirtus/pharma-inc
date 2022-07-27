<template>
  <tr class="table-item shadowed">
    <td>
      <img class="profile-thumbnail" :src="user.picture.thumbnail" />
    </td>
    <td class="font-m-m">{{ user.name.first }} {{ user.name.last }}</td>
    <td>
      <div class="center">
        <img v-if="user.gender === 'male'" class="svg-icon-male-primary" />
        <img v-else class="svg-icon-female-secondary" />
      </div>
    </td>
    <td>
      {{ birthDate }}
    </td>
    <td>
      <Button @click="goToSelectedUser">More</Button>
    </td>
  </tr>
</template>

<script>
import Button from "./Button.vue";
import formatDate from "@/util/formatDate.js";

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
  methods: {
    async goToSelectedUser() {
      await this.$store.dispatch("setFocusedUser", this.user.userId);
      this.$store.dispatch("setIsOpened", true);
      this.$router.push({name: 'Home', params: { id: this.user.userId} })
    },
  },
  computed: {
    birthDate() {
      return formatDate(new Date(this.user.dob.date));
    },
  },
};
</script>

<style lang="scss">
.table-item {
  margin: 15px;
  border-radius: 30px 0 0 30px;

  td {
    padding: 10px;

    .profile-thumbnail {
      border-radius: 50%;
    }
  }
}
</style>
