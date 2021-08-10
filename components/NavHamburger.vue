<template>
  <Button size="sm" link text="MENU" @click="onClick" :class="{ active }" />
</template>

<script>
import Button from './global/Button'
export default {
  components: { Button },
  data() {
    return {
      active: false
    }
  },
  methods: {
    onClick() {
      this.active = !this.active
      this.$emit('toggle-menu')
    }
  },
  watch: {
    $route() {
      this.active = false
    }
  }
}
</script>

<style scoped lang="scss">
button {
  z-index: 11;
  position: relative;
  padding: 5px;
  color: $dark !important;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -16px;
    top: 0;
    display: block;
    height: 1px;
    width: 14px;
    background: $dark;
    transition: transform 0.3s ease;
  }
  &::before {
    top: 10px;
  }
  &::after {
    top: 15px;
  }

  &.active {
    &::before {
      transform: rotate(45deg) translateY(3px);
    }
    &::after {
      transform: rotate(135deg) translateY(3px);
    }
  }
}
</style>
