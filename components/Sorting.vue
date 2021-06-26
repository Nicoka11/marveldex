<template>
  <div class="results-wrapper">
    <p class="search-query">Search results for “Flash” (10)</p>
    <div class="sorting">
      <p class="sorting-sortby">sort by:</p>
      <select id="sort-setting" name="sort-setting">
        <option value="name-asc">Name &uarr;</option>
        <option value="name-desc">Name &darr;</option>
        <option value="date-asc">Date &uarr;</option>
        <option value="date-desc">Date &darr;</option>
        <option value="type">Type</option>
        <option value="creator">Creator</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.search-query {
  height: fit-content;
  position: relative;
  margin-right: 1rem;
  color: #fff;

  &::before {
    position: absolute;
    content: '';
    width: 2rem;
    height: 120%;
    border-bottom: #e52327 solid 2px;
  }
}
.results-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1.2rem;
}
.sorting-sortby {
  display: inline-block;
  color: #fff;
  background-color: #2a2a2a;
  text-transform: uppercase;
  padding: 0.2rem;
}

.sorting {
  display: flex;
}

select {
  margin: 0;
  padding: 0.2rem;
  background-color: #2a2a2a;
  color: #fff;
  transition: all 0.5s ease;
  outline: none;
  border: #2a2a2a solid 1px;
}
option {
  margin: 0;
  padding: 0;
  border: red solid 1px;
  transition: all 0.5s ease;
}

.search-query {
  display: inline;
}

.sorting-list {
  list-style-type: none;
  padding-left: 5px;

  li {
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #e52327;
    }
  }
}
</style>
