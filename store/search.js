import axios from 'axios'
const md5 = require('md5')

export const state = () => ({
  navBar: {
    searchInput: 'This is it',
    filters: {
      type: 'characters',
      minDate: 1999,
    },
  },
  lastSearch: '',
  data: {},
})

export const mutations = {
  setSearch(state, value) {
    state.navBar.searchInput = value
  },
  setFilterType(state, filterType) {
    state.navBar.filters.type = filterType
  },
  setFetchedData(state, newData) {
    state.data = newData.data
  },
  setLastSearch(state, lastSearch) {
    state.lastSearch = lastSearch.data
  },
}

export const actions = {
  async asyncData({ commit, state }) {
    const apiKeyPublic = 'cabb2e817c239d2a3ba90fe6b8e2d45f'
    const apiKeyPrivate = 'a052f36166cfdc90a7a5fcad9a5d326fae3af923'
    const ts = new Date().getTime()
    const apiHash = md5(`${ts}${apiKeyPrivate}${apiKeyPublic}`)
    const searchInput = state.navBar.searchInput
    const minDate = state.navBar.filters.minDate
    const api = `http://gateway.marvel.com/v1/public/${
      state.navBar.filters.type
    }?${
      searchInput ? `nameStartsWith=${searchInput}` : ''
    }&modifiedSince=${minDate}&ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
    try {
      const marvelData = await axios.get(api).then((response) => {
        return response.data.data.results
      })
      commit('setLastSearch', { data: searchInput })
      commit('setFetchedData', { data: marvelData })
      return marvelData
    } catch (error) {
      throw new Error('Error while connecting to the Marvel API', error)
    }
  },
}
