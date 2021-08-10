<template>
  <div class="d-flex">
    <Button
      v-for="media in socialMedia"
      :key="media.name"
      link
      :href="media.link"
      target="_blank"
      class="icon mb-0 mr-32"
      :class="{ sm }"
    >
      <span :class="`icon-${media.name}`"></span>
    </Button>
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
      socialMedia: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/twojosteopatamarcodidio'
        },
        {
          name: 'znany-lekarz',
          link: 'https://www.znanylekarz.pl/marco-di-dio'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  font-size: 30px !important;
  transition: opacity 0.4s ease;
  &.sm {
    font-size: 24px !important;
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>
