export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  setPokemonName({ commit }, payload) {
    commit('SET_POKEMON_LIST', payload)
  },
  requestPokemonName({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$get(`/pokedex/2`, payload)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  },
  requestPokemonName1({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$get(`/pokedex/3`, payload)
        resolve(response)
      } catch (v) {
        reject(v)
      }
    })
  },
  requestPokemonName2({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$get(`/pokedex/4`, payload)
        resolve(response)
      } catch (x) {
        reject(x)
      }
    })
  },
  requestPokemonName3({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$get(`/pokedex/5`, payload)
        resolve(response)
      } catch (x) {
        reject(x)
      }
    })
  },
  requestPokemonDetail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      try {
        const response = this.$axios.$get(`/pokemon/${payload.pkdetail}`)
        resolve(response)
        console.log('DEWwwwwwwwwwwwwww', payload.pkdetail)
      } catch (a) {
        reject(a)
      }
    })
  },
}
