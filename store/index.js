export const state = () => ({
  theme: 'dark',
})

export const mutations = {
  changeTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
  },
}
