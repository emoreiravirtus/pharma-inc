<template>
  <div class="container">
    <Modal>
      <p>Elias</p>
    </Modal>
    <SearchingBar />
    <Table />
    <Loading @click="loadMore" :isLoading="isLoading"/>
  </div> 
</template>

<script>

import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'
import SearchingBar from './components/SearchingBar.vue'
import Table from './components/Table.vue'


export default {
  name: "Home",
  components: {
    Loading,
    Modal,
    SearchingBar,
    Table,
  },
  data () {
    return {
      page: 1
    }
  },
  async beforeMount()  {
    await this.$store.dispatch("addToUserList", this.page);
    this.$store.dispatch("getFocusedUser");
    this.$store.dispatch("filterUsers");
    this.page = this.page + 1;
  },
  methods: {
    loadMore() {
      this.$store.dispatch("addToUserList", this.page);
      this.page = this.page + 1;
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters["isLoading"];
    }
  }
};
</script>

<style lang="scss">
</style>
