<template>
  <component
    :is="type"
    :to="to ? to : false"
    :href="href ? href : false"
    :aria-label="to || href ? false : text"
    :class="className"
    @click="$emit('click')"
  >
    <span v-if="icon" :class="`icon-${icon} mr-8`"></span>
    {{ text }}
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    link: {
      type: Boolean,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    className() {
      let options = ['variant', 'outline', 'size', 'rounded', 'link']
      options = options
        .filter((option) => this[option])
        .map((option) => {
          if (typeof this[option] === 'boolean') {
            return option
          }
          return this[option]
        })

      if (!this.link) {
        options.unshift('btn')
      }
      return options.join(' ')
    },
    type() {
      if (this.to) {
        return 'nuxt-link'
      }
      if (this.href) {
        return 'a'
      }
      return 'button'
    }
  }
}
</script>

<style scoped lang="scss">
.btn,
.link {
  cursor: pointer;
}

.btn {
  padding: 24px 52px;
  color: $dark;
  border-radius: 50px;
  border: none;
  font-size: 20px;
  transition: opacity 0.3s ease;
  display: inline-block;
  &.primary {
    background: transparent linear-gradient(107deg, #55c777 0%, #4ae2aa 100%) 0%
      0% no-repeat padding-box;
  }
  &:not(.outline):hover {
    opacity: 0.8;
  }
  &.secondary {
    background: #55c777;
  }
  &.outline {
    background: none;
    border: 1px solid $primary;
    color: $primary;
    transition: color 0.4s ease 0.1s, background 0.4s ease;
    &:hover {
      background: $primary;
      color: $light;
    }
  }
  @include media-breakpoint-down(md) {
    padding: 16px 40px;
    font-size: 16px;
  }
}

.link {
  border: none;
  background: none;
  font-size: 20px;
  &.sm {
    font-size: 16px;
  }
  &.lg {
    font-size: 30px;
    font-weight: bold;
    @include media-breakpoint-down(md) {
      font-size: 20px;
    }
  }
  &.primary {
    color: $primary;
  }
  &.secondary {
    color: $dark;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      transform: scaleX(0);
      transition: 0.3s transform ease;
      background: $dark;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
