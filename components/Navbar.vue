<template>
  <header>
    <div class="search-bar">
      <img
        src="../assets/marveldex-logo.svg"
        height="100%"
        class="marveldex-logo"
      />
      <form id="search-form" action="post">
        <input
          id="search-input"
          :value="searchInput"
          type="text"
          name="search-input"
          placeholder="Search in the marvel history"
          @input="updateSearch"
        />
        <button id="search-submit" @click="searchSubmit">
          <img src="../assets/header/magnify-search.svg" height="70%" />
        </button>
      </form>
      <FilterSearch></FilterSearch>
    </div>
    <a id="marvel-btn" href="https://www.marvel.com/"
      >Check out the last news from Marvel !</a
    >
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
// import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Navbar',
  computed: {
    searchInput() {
      return this.$store.state.navBar
    },
  },
  methods: {
    updateSearch(e: any) {
      this.$store.commit('search/setSearch', e.target.value)
    },
    searchSubmit(e: any) {
      e.preventDefault()
      this.$store.dispatch('search/asyncData')
    },
  },
})
</script>

<style lang="scss" scoped>
p {
  color: #fff;
}
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  margin-bottom: 4rem;
}

.marveldex-logo {
  margin-right: 1rem;
}
.search-bar {
  display: flex;
}
#search-form {
  display: flex;
}

#search-input {
  font-weight: 600;
  margin: 0;
  padding-left: 0.5rem;
  height: 100%;
  width: 16rem;
  border: none;
  text-transform: uppercase;
  &::placeholder {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.21);
  }

  &:focus {
    outline: none;
  }
}

#search-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  background: #e52327;
  border: none;
  cursor: pointer;
}

#marvel-btn {
  display: inline-block;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem;
  color: #fff;
  background: #363636;
  justify-self: end;
  cursor: pointer;
}
</style>
