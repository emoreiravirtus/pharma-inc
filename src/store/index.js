import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    focusedUser: {},
    isLoading: false,
  },
  mutations: {
    addUsers: (state, users) => (state.users = state.users.concat(users)),
    setFocusedUser: (state, focusedUser) => (state.focusedUser = focusedUser),
    setIsLoading: (state, isLoading) => (state.isLoading = isLoading),
  },
  getters: {
    users: (state) => state.users,
    focusedUser: (state) => state.focusedUser,
    isLoading: (state) => state.isLoading,
  },
  actions: {
    async addToUserList(context, page) {
      context.dispatch('setIsLoading', true);

      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=50&seed=pharmaincelias`);
      const users = await response.json();
      console.log(users.results);

      context.commit("addUsers", users.results);
      context.dispatch('setIsLoading', false);
    },
    setIsLoading(context, isLoading) {
      context.commit("setIsLoading", isLoading);
    },
    setFocusedUser(context, user) {
      context.commit("setFocusedUser", user);
    },
    async getFocusedUser() {
      const response = await fetch("https://randomuser.me/api/?name=Simon&seed=pharmaincelias");
      const users = await response.json();
      console.log(users);
    }
  },
  modules: {},
});
