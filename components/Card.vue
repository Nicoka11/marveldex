<template>
  <div :key="id" class="card" :class="type">
    <figure>
      <div class="image-wrapper">
        <img src="../assets/vignette-portrait-flash.jpg" alt="" />
      </div>
      <p class="card-title">{{ title }}</p>
    </figure>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    // type: {
    //   type: String,
    //   default: '',
    //   required: true,
    // },
    // image: {
    //   type: String,
    //   default: '',
    // },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 17rem;
  height: 23rem;
  padding: 1.5rem;
  background: #202020;
  overflow: hidden;
  border-bottom: 0.8rem solid white;

  &-character {
    border-color: #3bffd0;
  }
  &-comics {
    border-color: #fbff3b;
  }
  &-creator {
    border-color: #b53bff;
  }
  &-events {
    border-color: #573bff;
  }
  &-series {
    border-color: #ff5151;
  }
  &-stories {
    border-color: #ff8126;
  }
}
.image-wrapper {
  height: 14rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.card-title {
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background: #2a2a2a;
  color: #fff;
  padding: 1.2rem;
}
</style>
