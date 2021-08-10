<template>
  <Box link class="collapse" @click="onClick" :class="{ active: open }">
    <slot name="default" />
    <div class="content" :class="{ hidden: !open }">
      <slot name="content" />
    </div>
  </Box>
</template>

<script>
import Box from './Box'
export default {
  components: { Box },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    onClick() {
      this.$emit('click')
    }
  },
  watch: {
    show() {
      this.toggle()
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  transition: transform 300ms ease, opacity 300ms ease, height 300ms ease,
    padding 300ms ease;
  padding: 20px 0;
  transform-origin: top;
  background: $light;
  &.hidden {
    height: 0;
    opacity: 0;
    padding: 0;
    transform: scaleY(0);
    transition: transform 300ms ease, opacity 150ms ease, height 300ms ease,
      padding 150ms ease;
  }
}
</style>
