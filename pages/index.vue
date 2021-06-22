<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default Vue.extend({})
</script>

<style>
.body {
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  background-color: #191919;
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
