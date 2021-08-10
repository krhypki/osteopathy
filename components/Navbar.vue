<template>
  <nav class="mb-24 mb-lg-80 py-16" :class="{ active: menuBoxShadow }">
    <Container class="d-flex align-items-center justify-content-between">
      <nuxt-link :to="localePath('/')" class="logo">
        <img
          src="~/assets/images/logo-twoj-osteopata-marco-didio.png"
          :alt="$t('images.logo')"
          class="img-fluid"
        />
      </nuxt-link>
      <mq-layout :mq="breakpoints.mobile">
        <NavHamburger @toggle-menu="toggleMenu" />
      </mq-layout>
      <TransitionScaleBottom>
        <div class="links" v-show="showMobileMenu">
          <component
            :is="breakpoints.mobile.includes($mq) ? 'container' : 'div'"
          >
            <Button
              v-for="link in links"
              :key="link.name"
              variant="secondary"
              link
              :text="$t(`navItems.${link.name}`)"
              :to="localePath(link.path.replace(' ', '-'))"
              class="montserrat"
            />
            <LangSwitcher class="link" />
          </component>
        </div>
      </TransitionScaleBottom>
    </Container>
  </nav>
</template>

<script>
import LangSwitcher from './LangSwitcher'
import NavHamburger from './NavHamburger'
import Button from '@/components/global/Button'
import TransitionScaleBottom from '@/components/transitions/ScaleBottom'
import Container from '@/components/global/grid/Container'

export default {
  components: {
    LangSwitcher,
    NavHamburger,
    TransitionScaleBottom,
    Container,
    Button
  },
  data() {
    return {
      links: [
        { name: 'about', path: 'about-me' },
        { name: 'offer', path: 'offer' },
        { name: 'contact', path: 'contact' }
      ],
      breakpoints: {
        mobile: ['xs', 'sm', 'md'],
        desktop: ['lg', 'xl']
      },
      openMobileMenu: false,
      menuBoxShadow: false
    }
  },
  methods: {
    toggleMenu() {
      this.openMobileMenu = !this.openMobileMenu
    }
  },
  computed: {
    showMobileMenu() {
      if (this.openMobileMenu && this.breakpoints.mobile.includes(this.$mq)) {
        return true
      }
      return !this.breakpoints.mobile.includes(this.$mq)
    }
  },
  watch: {
    $route() {
      this.openMobileMenu = false
    },
    openMobileMenu() {
      this.$emit('toggle')
    }
  },
  created() {
    if (process.client) {
      /* eslint-disable */
      const nav = document.querySelector('nav')
      const navStyles = window.getComputedStyle(nav)
      const navPadding = parseFloat(
        navStyles.paddingTop + navStyles.paddingBottom
      )
      window.addEventListener('scroll', () => {
        this.menuBoxShadow = window.scrollY > nav.offsetHeight + navPadding
      })
      /* eslint-enable */
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.openMobileMenu ? 'overflow-y-hidden' : ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
$mobile: md;
$desktop: lg;
nav {
  position: relative;
  background: $light;
  z-index: 10;
  transition: box-shadow 0.3s ease;
  &.active {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.16);
  }
  .logo {
    z-index: 11;
    img {
      max-width: 310px;
      @include media-breakpoint-down(lg) {
        max-width: 260px;
      }
      @include media-breakpoint-down(xs) {
        position: relative;
        left: -40px;
        width: 100%;
        max-width: 220px;
      }
    }
  }
  .links {
    text-transform: uppercase;
    .link {
      margin-right: 80px;
      &:last-child {
        margin-right: 0;
      }
    }
    @include media-breakpoint-down($mobile) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      min-height: 100vh;
      background: $light;
      z-index: 10;
      padding-top: 124px;
      padding-bottom: 32px;
      .container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .link {
        margin-bottom: 24px;
        margin-right: 0;
      }
    }
  }
}
</style>
