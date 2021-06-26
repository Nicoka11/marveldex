<template>
  <div class="container">
    <Navbar></Navbar>
    <Sorting></Sorting>
    <div class="grid-list">
      <Card
        v-for="item in marvelData"
        :key="item.id"
        :title="item.name"
        :image-path="item.thumbnail.path"
        :image-extension="item.thumbnail.extension"
      ></Card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const md5 = require('md5')

Vue.use(Vuex)
export default Vue.extend({
  async asyncData() {
    const apiKeyPublic = 'cabb2e817c239d2a3ba90fe6b8e2d45f'
    const apiKeyPrivate = 'a052f36166cfdc90a7a5fcad9a5d326fae3af923'
    const ts = new Date().getTime()
    const apiHash = md5(`${ts}${apiKeyPrivate}${apiKeyPublic}`)
    const api = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKeyPublic}&hash=${apiHash}`
    const marvelData = await axios.get(api).then((response) => {
      return response.data.data.results
    })
    return {
      marvelData,
    }
  },
  data() {
    return {}
  },
})
</script>

<style>
.body {
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #191919;
  padding: 1.5rem;
}
.grid-list {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, auto);
  column-gap: 15px;
  row-gap: 15px;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
