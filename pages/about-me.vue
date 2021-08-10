<template>
  <main>
    <AboutMe />
    <MarcoDiDio />
    <Experience />
    <HowCanIHelp />
    <LetsTalk />
  </main>
</template>

<script>
import AboutMe from '@/components/sections/about/AboutMe'
import MarcoDiDio from '@/components/sections/about/MarcoDiDio'
import Experience from '@/components/sections/about/Experience'
import HowCanIHelp from '@/components/sections/HowCanIHelp'
import LetsTalk from '@/components/sections/LetsTalk'

export default {
  nuxtI18n: {
    paths: {
      pl: '/o-mnie',
      en: '/about-me',
      it: '/chi-sono'
    }
  },
  components: {
    AboutMe,
    MarcoDiDio,
    Experience,
    HowCanIHelp,
    LetsTalk
  },
  head() {
    return {
      title: this.$t('meta.about.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.about.desc')
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
