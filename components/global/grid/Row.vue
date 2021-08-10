<template>
  <div class="row" :class="{ overflow, 'overflow-link': overflowLink }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    overflow: {
      type: Boolean,
      default: false
    },
    overflowLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  &.overflow {
    background: $light;
    z-index: 1;
    padding: 56px 0;
    position: relative;
    @include media-breakpoint-down(md) {
      padding: 28px 0;
    }
  }
  &.overflow-link {
    padding-bottom: 0;
  }
}
</style>
