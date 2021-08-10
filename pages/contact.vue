<template>
  <main class="borderless">
    <Hero />
    <FAQ />
  </main>
</template>

<script>
import Hero from '@/components/sections/contact/Hero'
import FAQ from '@/components/sections/contact/FAQ'

export default {
  nuxtI18n: {
    paths: {
      pl: '/kontakt',
      en: '/contact',
      it: '/contatti'
    }
  },
  components: { Hero, FAQ },
  head() {
    return {
      title: this.$t('meta.contact.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.contact.desc')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('meta.contact.keywords')
        }
      ]
    }
  }
}
</script>
