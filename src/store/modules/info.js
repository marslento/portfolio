const state = {
  step: 0
}

const mutations = {
  SET_STEP: (state, step) => {
    state.step = step
  }
}

const actions = {
  async setStep({ commit }, step) {
    commit('SET_STEP', step)
  }
}

const getters = {
  step: state => state.step
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
