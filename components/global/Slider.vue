<template>
  <no-ssr>
    <carousel :per-page="perPage" :per-page-custom="breakpoints">
      <slot />
    </carousel>
  </no-ssr>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.VueCarousel-wrapper {
  padding-bottom: 8px;
}
.VueCarousel-pagination {
  .VueCarousel-dot-container {
    margin-top: 0 !important;
    button {
      width: 8px !important;
      padding: 0 !important;
      height: 8px !important;
      margin: 6px;
      border: 1px solid $gray-1;
      background: transparent !important;
      outline: none !important;
      &.VueCarousel-dot--active {
        background: $gray-1 !important;
      }
    }
  }
}
</style>
