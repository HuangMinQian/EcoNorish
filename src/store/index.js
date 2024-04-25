import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    tagViews: []
  },
  mutations: {
    setTagView: (state, routePath) => {
      if (state.tagViews.indexOf(routePath) === -1) {
        state.tagViews.push(routePath);
      }
    }
  },
  actions: {},
  getters: {
    tagViews: (state) => state.tagViews
  }
});

export default store;
