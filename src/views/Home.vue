<template>
  <div class="container">
    <Modal :isOpened="isOpened" @closeModal="setIsOpened(false)">
      <p>Elias</p>
    </Modal>
    <SearchingBar />
    <Table :users="users"/>
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
      isOpened: false,
      page: 1
    }
  },
  beforeMount() {
    this.$store.dispatch("addToUserList", this.page);
    this.$store.dispatch("getFocusedUser");
    this.page = this.page + 1;
  },
  methods: {
    setIsOpened(value) {
      return this.isOpened = value;
    },
    loadMore() {
      this.$store.dispatch("addToUserList", this.page);
      this.page = this.page + 1;
    }
  },
  computed: {
    users() {
      return this.$store.getters["users"];
    },
    isLoading() {
      return this.$store.getters["isLoading"];
    }
  }
};
</script>

<style lang="scss">
</style>
