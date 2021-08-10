<template>
  <transition name="scale">
    <slot />
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s;
  transform-origin: bottom;
}
.scale-enter,
.scale-leave-to {
  transform: scaleY(0);
  transform-origin: bottom;
}
</style>
