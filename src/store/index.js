import { createStore } from "vuex";

import orderByName from "../util/orderByName.js";
import orderByGender from "../util/orderByGender.js";
import orderByBirth from "../util/orderByBirth.js";

export default createStore({
  state: {
    users: [],
    filteredUsers: [],
    focusedUser: {},
    isLoading: false,
    isOpened: false,
    filter: {
      orderBy: "name",
      increasing: true,
      searchTerm: "",
    },
  },
  mutations: {
    addUsers: (state, users) => state.users = state.users.concat(users),
    setFocusedUser: (state, focusedUser) => state.focusedUser = focusedUser,
    setIsLoading: (state, isLoading) => state.isLoading = isLoading,
    setIsOpened: (state, isOpened) => state.isOpened = isOpened,
    setFilteredUsers: (state, filteredUsers) => state.filteredUsers = filteredUsers,
    setOrderBy: (state, orderBy) => state.filter.orderBy = orderBy,
    setIncreasing: (state, increasing) => state.filter.increasing = increasing,
  },
  getters: {
    users: (state) => state.users,
    focusedUser: (state) => state.focusedUser,
    isLoading: (state) => state.isLoading,
    isOpened: (state) => state.isOpened,
    orderBy: (state) => state.filter.orderBy,
    increasing: (state) => state.filter.increasing,
  },
  actions: {
    async addToUserList(context, page) {
      context.dispatch("setIsLoading", true);

      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=pharmaincelias`
      );
      const users = await response.json();
      console.log(users.results);

      context.commit("addUsers", users.results);
      context.dispatch("setIsLoading", false);
      context.dispatch("filterUsers");
    },
    setIsLoading(context, isLoading) {
      context.commit("setIsLoading", isLoading);
    },
    setIsOpened(context, isOpened) {
      context.commit("setIsOpened", isOpened);
    },
    setFocusedUser(context, user) {
      context.dispatch("setIsOpened", true);
      context.commit("setFocusedUser", user);
    },
    async getFocusedUser() {
      const response = await fetch(
        "https://randomuser.me/api/?name=Simon&seed=pharmaincelias"
      );
      const users = await response.json();
      console.log(users);
    },
    filterUsers({ commit, state }) {
      console.log(state.users);
      let filteredUsers = state.users;
      const orderBy = state.filter.orderBy;
      const increasing = state.filter.increasing;
      let filterFunction;

      if(orderBy === 'name') {
        filterFunction = increasing ? orderByName.increasing : orderByName.decreasing;
      }

      if(orderBy === 'gender') {
        filterFunction = increasing ? orderByGender.increasing : orderByGender.decreasing;
      }

      if(orderBy === 'birth') {
        filterFunction = increasing ? orderByBirth.increasing : orderByBirth.decreasing;
      }

      if(orderBy !== '') {
        filteredUsers.sort(filterFunction);
      
        commit('setFilteredUsers', filteredUsers);
      }

      
    },
    setOrderBy( { dispatch, commit, state }, orderBy ) {

      if(state.filter.orderBy === orderBy) {
        commit('setIncreasing', !state.filter.increasing)
      }

      commit('setOrderBy', orderBy);
      dispatch('filterUsers');
    }
  },
  modules: {},
});
