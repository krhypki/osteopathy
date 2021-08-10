<template>
  <main>
    <Hero />
    <WhoAmI />
    <Osteopathy />
    <Indication />
    <LetsTalk />
  </main>
</template>

<script>
import Hero from '@/components/sections/home/Hero'
import WhoAmI from '@/components/sections/WhoAmI'
import Osteopathy from '@/components/sections/home/Osteopathy'
import Indication from '@/components/sections/home/Indication'
import LetsTalk from '@/components/sections/LetsTalk'

export default {
  components: {
    Hero,
    WhoAmI,
    Osteopathy,
    Indication,
    LetsTalk
  },
  head() {
    return {
      title: this.$t('meta.home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.home.desc')
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
