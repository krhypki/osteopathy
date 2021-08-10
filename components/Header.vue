<template>
  <header>
    <CookieBar v-show="showCookieBar" @hide="cookiesAccept = !cookiesAccept" />
    <Navbar @toggle="mobileMenuOpen = !mobileMenuOpen" />
  </header>
</template>

<script>
import CookieBar from './CookieBar'
import Navbar from './Navbar'

export default {
  components: {
    CookieBar,
    Navbar
  },
  data() {
    return {
      mobileMenuOpen: false,
      cookiesAccept: true
    }
  },
  created() {
    this.cookiesAccept = this.$cookies.get('cookiesAccept')
  },
  computed: {
    showCookieBar() {
      return !this.cookiesAccept && !this.mobileMenuOpen
    }
  }
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 3;
}
</style>
