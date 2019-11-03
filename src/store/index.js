import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList: [
      {
        id: '1',
        name: '幻影车灯音响'
      },
      {
        id: '2',
        name: '钟祥启程车灯服务店'
      },
      {
        id: '3',
        name: '亮途汽车灯光升级服务店'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
