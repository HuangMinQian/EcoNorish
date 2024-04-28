import Vuex from "vuex"; // 引入了vuex库

const store = new Vuex.Store({ // 实例化创建一个新的store
  state: { // 存储被标记的视图路径
    tagViews: []
  },
  mutations: { // 同步更改组件状态，修改state
    setTagView: (state, routePath) => {
      if (state.tagViews.indexOf(routePath) === -1) {
        state.tagViews.push(routePath);
      }
    }
  },
  actions: {}, // 异步
  getters: { // 计算属性
    tagViews: (state) => state.tagViews
  }
});

export default store;
