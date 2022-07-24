<template>
  <div class="container">
    <Modal>
      <p>Elias</p>
    </Modal>
    <SearchingBar />
    <Table :users="users"/>
    <Loading @click="isLoading = !isLoading" :isLoading="isLoading"/>
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
  data() {
    return {
      isLoading: false
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.$store.dispatch("getUsersList");
  },
  computed: {
    users() {
      return this.$store.getters["users"];
    }
  }
};
</script>

<style lang="scss">
</style>
