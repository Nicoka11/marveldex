export const state = () => ({
  navBar: {
    searchBar: 'This is america',
  },
})

export const mutations = {
  updateSearchBar(content) {
    state.navBar.searchBar = content
  },
}
