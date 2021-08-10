<template>
  <div
    class="box d-flex flex-column"
    :class="{ 'box-link': link }"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  background: $light;
  border: 1px solid $gray;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  padding: 22px 36px;
  width: 100%;
  height: 100%;
  &-link {
    cursor: pointer;
    transition: box-shadow 0.4s ease;
    &:hover,
    &.active {
      box-shadow: none;
    }
  }
  small {
    line-height: 1.5;
  }
}
</style>
