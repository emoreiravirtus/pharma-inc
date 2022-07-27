<template>
  <div class="container">
    <Modal>
      <FocusedUser />
    </Modal>
    <Table />
    <Loading @click="loadMore" :isLoading="isLoading" />
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Modal from "./components/Modal.vue";
import Table from "./components/Table.vue";
import FocusedUser from "./components/FocusedUser.vue";

export default {
  name: "Home",
  components: {
    Loading,
    Modal,
    Table,
    FocusedUser,
  },
  data() {
    return {
      page: 1,
    };
  },
  async beforeMount() {
    if (this.$route.params.id) {
      await this.$store.dispatch("setFocusedUser", this.$route.params.id);
      this.$store.dispatch("setIsOpened", true);
    }
    await this.$store.dispatch("addToUserList", this.page);
    this.$store.dispatch("filterUsers");
    this.page = this.page + 1;
  },
  methods: {
    loadMore() {
      this.$store.dispatch("addToUserList", this.page);
      this.page = this.page + 1;
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters["isLoading"];
    },
    isOpened() {
      return this.$store.getters["isOpened"];
    },
  },
};
</script>

<style lang="scss"></style>
