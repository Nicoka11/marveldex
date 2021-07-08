<template>
  <div :key="id" class="card card-character">
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
    id: {
      type: String,
      default: Date.now().toString(),
    },
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
  cursor: pointer;
  border: #202020 1px solid;
  transition: all 0.5s ease;

  &:hover {
    border: #fff 1px solid;
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
