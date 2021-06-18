<template>
  <header>
    <img
      src="../assets/marveldex-logo.svg"
      height="100%"
      class="marveldex-logo"
    />
    <form id="search-form" action="post">
      <input
        id="search-input"
        type="text"
        name="search-input"
        placeholder="Search in the marvel history"
      />
      <button id="search-submit">
        <img src="../assets/header/magnify-search.svg" height="70%" />
      </button>
    </form>
  </header>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
header {
  display: flex;
  background: rgb(0, 0, 0);
  width: 100vw;
  height: 6rem;
  padding: 1.5rem;
}

.marveldex-logo {
  margin-right: 1rem;
}

#search-form {
  display: flex;
}

#search-input {
  margin: 0;
  padding-left: 0.5rem;
  height: 100%;
  width: 16rem;
  border: none;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
}

#search-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 3rem;
  width: 3rem;
  background: #e52327;
  border: none;
}
</style>
