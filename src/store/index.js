import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    populateUser({commit, dispatch, state}) {
      MemberStack.onReady.then(function(member) {
        console.log(member);
        commit("setUser", member);
      });
    },
  },
  getters: {
    user: state => state.user,
    name: state => state.user && `${state.user['first-name']} ${state.user['last-name']}`, 
    isLoggedIn: state => state.user && state.user.loggedIn,
  }
})
