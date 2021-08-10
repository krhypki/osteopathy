<template>
  <div class="d-inline-flex montserrat">
    <div v-for="(lang, index) in languages" :key="lang">
      <Button
        :text="lang.toUpperCase()"
        variant="secondary"
        link
        :to="switchLocalePath(lang)"
        :class="{ active: $i18n.locale === lang, 'mobile-sm': sm }"
      />
      <span v-if="index < languages.length - 1" :class="{ 'mobile-sm': sm }"
        >/</span
      >
    </div>
  </div>
</template>

<script>
import Button from './global/Button'
export default {
  components: { Button },
  props: {
    sm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      languages: ['pl', 'en', 'it']
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-sm {
  @include media-breakpoint-down(sm) {
    font-size: 12px !important;
  }
}
.active {
  border-bottom: 1px solid $dark !important;
  pointer-events: none;
}
span {
  margin: 0 2px;
}
</style>
