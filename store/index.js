export const state = () => ({
  pokemons: []
})

export const mutations = {
  LOAD_POKEMONS: (state, payload) => (state.pokemons = payload),
}

export const actions = {
  async GET_POKEMONS({ commit }) {
   const respuesta = await this.$axios.$get(
      'https://pokeapi.co/api/v2/pokemon')

    commit("LOAD_POKEMONS", respuesta)
  }

}

export const getters = {
  pokemons(state){
    return state.pokemons
  }
}  