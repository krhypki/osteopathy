<template>
  <component :is="element" class="text-anim" v-in-viewport.once>
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    element: {
      type: String,
      default: 'p'
    }
  }
}
</script>

<style scoped lang="scss">
.text-anim {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.4s ease-in 0.2s, transform 0.6s ease-out 0.2s;
  &.in-viewport,
  &.above-viewport {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
