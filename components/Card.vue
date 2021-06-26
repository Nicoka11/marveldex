<template>
  <div :id="id" class="card card-character">
    <figure>
      <div class="image-wrapper">
        <img :src="genImageUrl(imagePath, imageExtension)" alt="" />
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
    type: {
      type: String,
      default: '',
    },
    imagePath: {
      type: String,
      default: '',
    },
    imageExtension: {
      type: String,
      default: 'jpg',
    },
  },
  data() {
    return {
      imageUrl: '',
    }
  },
  methods: {
    genImageUrl(imgPath: String, imgExtension: String) {
      return `${imgPath}.${imgExtension}`
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  // width: 17rem;
  height: 23rem;
  padding: 1.5rem;
  background: #202020;
  overflow: hidden;
  border-bottom: 0.8rem solid white;
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background: #000000;
  }

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
  display: flex;
  height: 14rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  justify-content: center;
  img {
    height: 100%;
  }
}
.card-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background: #2a2a2a;
  color: #fff;
  padding: 1.2rem;
}
</style>
