<template>
  <div class="container">
    <slot />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  max-width: none;
  @include media-breakpoint-up(sm) {
    max-width: 540px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @include media-breakpoint-up(md) {
    max-width: 720px;
  }
  @include media-breakpoint-up(lg) {
    max-width: 960px;
  }
  @include media-breakpoint-up(xl) {
    max-width: 1170px;
  }
}
</style>
