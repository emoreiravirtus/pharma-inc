import { createStore } from "vuex";

export default createStore({
  state: {
    users: []
  },
  mutations: {
    setUsers: (state, users) => state.users = users
  },
  getters: {
    users: state => state.users
  },
  actions: {
    async getUsersList(context) {
        
      const response = await fetch('https://randomuser.me/api/?results=50');
      const users = await response.json();

      context.commit('setUsers', users);
    },
  },
  modules: {},
});
