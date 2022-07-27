import { createStore } from "vuex";

import orderByName from "../util/orderByName.js";
import orderByGender from "../util/orderByGender.js";
import orderByBirth from "../util/orderByBirth.js";
import getPageNumber from "../util/getPageNumber.js";

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
    addUsers: (state, users) => (state.users = state.users.concat(users)),
    setIsLoading: (state, isLoading) => (state.isLoading = isLoading),
    setIsOpened: (state, isOpened) => (state.isOpened = isOpened),
    setFocusedUser: (state, focusedUser) => (state.focusedUser = focusedUser),
    setFilteredUsers: (state, filteredUsers) =>
      (state.filteredUsers = filteredUsers),
    setOrderBy: (state, orderBy) => (state.filter.orderBy = orderBy),
    setIncreasing: (state, increasing) =>
      (state.filter.increasing = increasing),
  },
  getters: {
    users: (state) => state.users,
    isLoading: (state) => state.isLoading,
    isOpened: (state) => state.isOpened,
    focusedUser: (state) => state.focusedUser,
    orderBy: (state) => state.filter.orderBy,
    increasing: (state) => state.filter.increasing,
  },
  actions: {
    async addToUserList(context, page) {
      context.dispatch("setIsLoading", true);

      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=pharmaincelias`
      );
      const { results } = await response.json();

      let index = page * 50 - 49;

      let indexedUsers = results.map((user) => {
        user.userId = index;
        index++;
        return user;
      });

      context.commit("addUsers", indexedUsers);
      context.dispatch("setIsLoading", false);
      context.dispatch("filterUsers");
    },
    setIsLoading(context, isLoading) {
      context.commit("setIsLoading", isLoading);
    },
    setIsOpened(context, isOpened) {
      context.commit("setIsOpened", isOpened);
    },
    async setFocusedUser(context, id) {
      if (!id) context.commit("setFocusedUser", {});

      const page = getPageNumber(id);

      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=pharmaincelias`
      );
      const { results } = await response.json();
      const user = results[Number(id) - page * 50 + 49];

      context.commit("setFocusedUser", user);
    },
    filterUsers({ commit, state }) {
      let filteredUsers = state.users;
      const orderBy = state.filter.orderBy;
      const increasing = state.filter.increasing;
      let filterFunction;

      if (orderBy === "name") {
        filterFunction = increasing
          ? orderByName.increasing
          : orderByName.decreasing;
      }

      if (orderBy === "gender") {
        filterFunction = increasing
          ? orderByGender.increasing
          : orderByGender.decreasing;
      }

      if (orderBy === "birth") {
        filterFunction = increasing
          ? orderByBirth.increasing
          : orderByBirth.decreasing;
      }

      if (orderBy !== "") {
        filteredUsers.sort(filterFunction);

        commit("setFilteredUsers", filteredUsers);
      }
    },
    setOrderBy({ dispatch, commit, state }, orderBy) {
      if (state.filter.orderBy === orderBy) {
        commit("setIncreasing", !state.filter.increasing);
      }

      commit("setOrderBy", orderBy);
      dispatch("filterUsers");
    },
  },
  modules: {},
});
