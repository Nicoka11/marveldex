<template>
  <div class="filter-position">
    <div class="filter-container">
      <span class="filter-text">filter &darr;</span>
      <form class="filter-form">
        <div class="filter-type--name">type :</div>
        <div class="filter-type--content">
          <button
            class="
              filter-type--btn
              filter-type--btn-characters
              filter-type--btn-active
            "
            data-type="characters"
            @click="updateFilterType"
          >
            characters
          </button>
          <button
            class="filter-type--btn filter-type--btn-comics"
            data-type="comics"
            @click="updateFilterType"
          >
            comics
          </button>
          <button
            class="filter-type--btn filter-type--btn-creators"
            data-type="creators"
            @click="updateFilterType"
          >
            creators
          </button>
          <button
            class="filter-type--btn filter-type--btn-events"
            data-type="events"
            @click="updateFilterType"
          >
            events
          </button>
          <button
            class="filter-type--btn filter-type--btn-series"
            data-type="series"
            @click="updateFilterType"
          >
            series
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FilterSearch',
  data() {
    return {
      filterType: 'characters',
    }
  },
  computed: {
    filters() {
      return this.$store.state.search.navBar.filters
    },
  },
  methods: {
    updateFilterType(e: any) {
      e.preventDefault()
      const newFilter = e.target.dataset.type
      const filterBtns = document.querySelectorAll('.filter-type--btn')
      filterBtns.forEach((btn) => {
        btn.classList.remove('filter-type--btn-active')
      })
      e.target.classList.add('filter-type--btn-active')
      this.filterType = newFilter
      this.changeFilter(newFilter)
    },
    changeFilter(filterType: any) {
      this.$store.commit('search/setFilterType', filterType)
    },
    updateMinDate(e: any) {
      e.preventDefault()
      this.$store.commit('search/setMinDate', e.target.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.filter-container {
  position: absolute;
  padding: 1rem;
  background-color: #2a2a2a;
  height: 3rem;
  width: 6rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  &:hover {
    height: inherit;
    width: 24rem;

    & .filter-form {
      text-transform: uppercase;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      grid-gap: 0.5rem;
      margin-bottom: 1rem;
    }

    & .apply-btn {
      display: inline-block;
    }
  }

  .filter-text {
    text-transform: uppercase;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
  }
}
.filter-type {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 22rem;

  &--name {
    padding: 0.5rem 0;
    grid-area: 1/1/1/1;
  }

  &--content {
    grid-area: 1/2/1/2;
  }

  &--btn {
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0.5rem;
    color: #fff;
    border: none;
    margin: 0 0.3rem 0.6rem 0;
    background: #363636;
    cursor: pointer;
    transition: all 0.3s ease;

    &-characters {
      border-bottom: 3px solid #3bffd0;
    }
    &-comics {
      border-bottom: 3px solid #fbff3b;
    }
    &-creators {
      border-bottom: 3px solid #b53bff;
    }
    &-events {
      border-bottom: 3px solid #573bff;
    }
    &-series {
      border-bottom: 3px solid #ff5151;
    }

    &:hover {
      background-color: #464646;
    }
    &:active {
      transform: translateY(2px);
    }

    &-active {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 2px rgba(255, 255, 255, 0.5) solid;
      }
    }
  }
}

.filter-date {
  &--name {
    grid-area: 2/1/2/1;
    padding: 0.25rem;
  }
  &--content {
    grid-area: 2/2/2/2;
    input[type='number'] {
      outline: none;
      border: none;
      color: #fff;
      background: #363636;
      padding: 0.5rem;
      margin: 0;

      &:first-child {
        margin-right: 0.6rem;
      }
    }
  }
}
.filter-position {
  position: relative;
  width: fit-content;
}

.filter-form {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
  margin: 0;
}
</style>
