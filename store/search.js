import axios from 'axios'
const md5 = require('md5')

export const state = () => ({
  navBar: {
    searchInput: '',
    filters: {
      type: 'characters',
    },
  },
  lastSearch: '',
  sortOption: 0,
  data: [],
})

export const mutations = {
  setSearch(state, value) {
    state.navBar.searchInput = value
  },
  setFilterType(state, filterType) {
    state.navBar.filters.type = filterType
  },
  setMinDate(state, minDate) {
    state.navBar.filters.minDate = minDate
  },
  setSortOption(state, sortOption) {
    state.sortOption = sortOption
    state.data = state.data.reverse()
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
    const createApiUrl = (type, state) => {
      switch (type) {
        case 'characters':
          return `http://gateway.marvel.com/v1/public/${
            state.navBar.filters.type
          }?${
            searchInput ? `nameStartsWith=${searchInput}` : ''
          }&limit=100&ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
        case 'comics':
          return `http://gateway.marvel.com/v1/public/${
            state.navBar.filters.type
          }?${
            searchInput ? `titleStartsWith=${searchInput}` : ''
          }&limit=100&ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
        case 'creators':
          return `http://gateway.marvel.com/v1/public/${
            state.navBar.filters.type
          }?${
            searchInput ? `nameStartsWith=${searchInput}` : ''
          }&limit=100&ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
        case 'events':
          return `http://gateway.marvel.com/v1/public/${
            state.navBar.filters.type
          }?${
            searchInput ? `nameStartsWith=${searchInput}` : ''
          }&limit=100&ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
        case 'series':
          return `http://gateway.marvel.com/v1/public/${
            state.navBar.filters.type
          }?${
            searchInput ? `titleStartsWith=${searchInput}` : ''
          }&limit=100&ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
      }
    }
    const apiKeyPublic = 'cabb2e817c239d2a3ba90fe6b8e2d45f'
    const apiKeyPrivate = 'a052f36166cfdc90a7a5fcad9a5d326fae3af923'
    const ts = new Date().getTime()
    const apiHash = md5(`${ts}${apiKeyPrivate}${apiKeyPublic}`)
    const searchInput = state.navBar.searchInput
    const api = createApiUrl(state.navBar.filters.type, state)
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
