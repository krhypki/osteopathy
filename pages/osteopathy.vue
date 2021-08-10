<template>
  <main>
    <Hero />
    <HowCanIHelp />
    <WhoAmI />
    <LetsTalk />
  </main>
</template>

<script>
import Hero from '@/components/sections/osteopathy/Hero'
import HowCanIHelp from '@/components/sections/HowCanIHelp'
import WhoAmI from '@/components/sections/WhoAmI'
import LetsTalk from '@/components/sections/LetsTalk'

export default {
  nuxtI18n: {
    paths: {
      pl: '/osteopatia',
      en: '/osteopathy',
      it: '/osteopatia'
    }
  },
  components: { Hero, HowCanIHelp, WhoAmI, LetsTalk },
  head() {
    return {
      title: this.$t('meta.osteopathy.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.osteopathy.desc')
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
