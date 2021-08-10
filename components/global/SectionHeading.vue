<template>
  <component
    :is="size"
    class="heading"
    :class="[
      center ? 'text-center' : 'd-inline-block',
      { 'top-16': size === 'h2', before }
    ]"
    v-in-viewport.once
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'h2'
    },
    center: {
      type: Boolean,
      default: false
    },
    before: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.heading {
  position: relative;
  color: $primary;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: 100%;
    background: $light;
    transition: transform 0.6s ease-out 0.2s;
    transform-origin: right;
  }
  &.before {
    @include media-breakpoint-up(lg) {
      &::before {
        content: '';
        position: absolute;
        left: -98px;
        top: 0;
        height: 90px;
        width: 4px;
        background: $primary;
        transform: scaleY(0);
        transition: transform 0.6s ease 0.2s;
        @include media-breakpoint-only(lg) {
          left: -80px;
        }
      }
      &.top-16 {
        &::before {
          top: -16px;
        }
      }
    }
  }
  &.in-viewport,
  &.above-viewport {
    &::after {
      transform: scaleX(0);
    }
    &::before {
      transform: scaleY(1);
    }
  }
}
</style>
