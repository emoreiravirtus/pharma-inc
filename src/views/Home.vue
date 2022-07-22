<template>
  <Loading />
  <Modal />
  <NavBar />
  <SearchingBar />
  <Table />
  {{ users }}
</template>

<script>

import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'
import NavBar from './components/NavBar.vue'
import SearchingBar from './components/SearchingBar.vue'
import Table from './components/Table.vue'


export default {
  name: "Home",
  components: {
    Loading,
    Modal,
    NavBar,
    SearchingBar,
    Table,
  },
  beforeMount() {
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
