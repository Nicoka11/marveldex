<template>
  <div class="filter-position">
    <div class="filter-container">
      <span class="filter-text">filter &darr;</span>
      <form class="filter-form">
        <div class="filter-type--name">type :</div>
        <div class="filter-type--content">
          <button
            class="filter-type--btn filter-type--btn-characters"
            @click.prevent
          >
            characters
          </button>
          <button
            class="filter-type--btn filter-type--btn-comics"
            @click.prevent
          >
            comics
          </button>
          <button
            class="filter-type--btn filter-type--btn-creators"
            @click.prevent
          >
            creators
          </button>
          <button
            class="filter-type--btn filter-type--btn-events"
            @click.prevent
          >
            events
          </button>
          <button
            class="filter-type--btn filter-type--btn-series"
            @click.prevent
          >
            series
          </button>
          <button
            class="filter-type--btn filter-type--btn-stories"
            @click.prevent
          >
            stories
          </button>
        </div>
        <div class="filter-date--name">date :</div>
        <div class="filter-date--content">
          <input
            id="date-min"
            type="number"
            name="date-min"
            min="1950"
            max="2021"
            step="1"
            value="1950"
          />
          <input
            id="date-max"
            type="number"
            name="date-max"
            min="1950"
            max="3000"
            step="1"
            value="2021"
          />
        </div>
      </form>
      <button class="apply-btn">apply</button>
    </div>
  </div>
</template>

<script lang="ts"></script>

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
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0.5rem;
    color: #fff;
    border: none;
    margin: 0 0.3rem 0.6rem 0;
    background: #363636;
    cursor: pointer;

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
    &-stories {
      border-bottom: 3px solid #ff8126;
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

.apply-btn {
  display: none;
  align-self: flex-end;
  width: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  color: #fff;
  border: none;
  margin: 0 0.3rem 0.6rem 0;
  background: #363636;
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
  margin: 0;
}
</style>
