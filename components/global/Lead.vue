<template>
  <component :is="component" class="lead h3 text-light" v-in-viewport.once>
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    component: {
      type: String,
      default: 'p'
    }
  }
}
</script>

<style scoped lang="scss">
.lead {
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s ease 0.4s;
  &.in-viewport,
  &.above-viewport {
    transform: scaleY(1);
  }
}
</style>
