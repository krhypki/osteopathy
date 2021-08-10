<template>
  <main>
    <Hero />
    <Indication />
    <WhoAmI />
    <LetsTalk />
  </main>
</template>

<script>
import Hero from '@/components/sections/offer/Hero'
import WhoAmI from '@/components/sections/WhoAmI'
import LetsTalk from '@/components/sections/LetsTalk'
import Indication from '@/components/sections/offer/Indication'

export default {
  nuxtI18n: {
    paths: {
      pl: '/oferta',
      en: '/offer',
      it: '/offerta'
    }
  },
  components: {
    WhoAmI,
    Hero,
    LetsTalk,
    Indication
  },
  head() {
    return {
      title: this.$t('meta.offer.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.offer.desc')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('meta.home.keywords')
        }
      ]
    }
  }
}
</script>

<style scoped></style>
