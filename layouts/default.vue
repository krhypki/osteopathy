<template>
  <div>
    <Header />
    <Container>
      <nuxt class="pt-24 pt-md-80" />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/global/grid/Container'

export default {
  transition: 'default',
  components: {
    Header,
    Footer,
    Container
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-in, transform 0.5s ease-out;
}
.page-enter {
  transform: translateX(-120%);
  opacity: 0;
}
.page-leave-to {
  transform: translateX(120%);
  opacity: 0;
}

@include media-breakpoint-up(lg) {
  main:not(.borderless) {
    position: relative;
    margin-bottom: 200px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      height: calc(100% - 80px);
      border-right: 1px solid $gray;
    }
    section {
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}
</style>
