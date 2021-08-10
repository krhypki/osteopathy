<template>
  <div class="cookie-bar" :class="{ 'd-none': !loaded }">
    <p class="mb-0">
      <small>
        {{ $t('sections.cookiesBefore') }}
      </small>
      <i class="icon-cookie"></i>
      <small>
        {{ $t('sections.cookiesAfter') }}
      </small>
      <Button
        :text="$t('sections.cookiesLink')"
        link
        :to="localePath('policy-privacy')"
        size="sm"
      />
    </p>
    <button class="close" @click="onClick">
      <i class="icon-clear"></i>
    </button>
  </div>
</template>

<script>
import Button from './global/Button'
export default {
  components: { Button },
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    onClick() {
      this.$emit('hide')
      this.$cookies.set('cookiesAccept', true, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

<style lang="scss">
.cookie-bar {
  width: 100vw;
  padding: 24px 64px 20px 16px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  position: relative;
  p {
    line-height: 1;
  }
  .icon-cookie {
    margin: 0 4px;
  }
  .close {
    position: absolute;
    top: 24px;
    right: 24px;
    transform: translateY(-50%);
    font-size: 26px;
    background: none;
    border: none;
    padding: 5px;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>
