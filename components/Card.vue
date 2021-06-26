<template>
  <div class="card">
    <figure>
      <div class="image-wrapper">
        <img src="../assets/vignette-portrait-flash.jpg" alt="" />
      </div>
      <p class="card-title">the flash</p>
    </figure>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.card {
  width: 17rem;
  height: 23rem;
  padding: 1.5rem;
  background: #202020;
  overflow: hidden;
  border-bottom: 0.8rem solid white;
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
